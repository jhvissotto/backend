import { axios } from '~/src/libs/packs'
import * as ext from '~/src/libs/extensions/axios'
import { LRU } from '~/src/libs/helpers/data'
import { dt } from '~/src/libs/functions'
import { headers } from '~/src/web'

// prettier-ignore
export function create(
  options?:     Parameters<typeof axios.create>[0],
  custom?: {
    headers?:   Parameters<typeof headers>[0],
    adapters?: {
      // ======== retry ======== //
      retry?:         Parameters<typeof ext.retry>[1],
      // ======== throttle ======== //
      throttle?:      Parameters<typeof ext.throttle>[1],
      throttle_LRU?:  ConstructorParameters<typeof LRU.v1>[0],
      // ======== cache ======== //
      cache?:         Parameters<typeof ext.cache>[1],
      cache_LRU?:     ConstructorParameters<typeof LRU.v1>[0],
    }
  }
) {

  // ===================================================== //
  // ================ extensions adapters ================ //
  // ===================================================== //
  const throttle = (adapter) => ext.throttle(adapter, {
    threshold: dt.conv({ ms: 500 }).ms,
    cache: new LRU.v1({ 
      max: 10,
      ...custom?.adapters?.throttle_LRU 
    }),
    ...custom?.adapters?.throttle
  })


  const cache = (adapter) => ext.cache(adapter, {
    // cacheFlag: 'cache', // default
    enabledByDefault: false,
    defaultCache: new LRU.v1({
      ttl: dt.conv({ hr: 3 }).ms,
      max: 200,
      ...custom?.adapters?.cache_LRU
    }),
    ...custom?.adapters?.cache
  })


  const retry = (adapter) => ext.retry(adapter, {
    times: 1,
    ...custom?.adapters?.retry
  })



  // ================================================== //
  // ================ instance configs ================ //
  // ================================================== //
  return axios.create({
    // ========================== //
    // ==== instance options ==== //
    // ========================== //
    ...options,

    
    // ========================= //
    // ==== internal custom ==== //
    // ========================= //
    headers: headers({
      CacheControl: 'no-cache',
      ...custom?.headers 
    }),
    
    // ============================= //
    // ==== extensions adapters ==== //
    // ============================= //
    adapter: throttle(cache(retry(axios.defaults.adapter))),
  })

}
