import { env, config } from '~/src/global'
import * as redis from '~/src/services/redis'
import { Cache } from '~/src/libs/extensions/express'

export function initialize(opts: Parameters<typeof Cache.options>[0]) {
  // changing default configs
  return Cache.options({
    debug: env().CACHE_EXPRESS_DEBUG,
    defaultDuration: config().cacheDuration,
    enabled: env().CACHE_EXPRESS_ENABLE,
    redisClient: redis.client, // if provided, uses the [node-redis](https://github.com/NodeRedis/node_redis) client instead of [memory-cache](https://github.com/ptarjan/node-cache)
    // appendKey:        fn(req, res),   // appendKey takes the req/res objects and returns a custom value to extend the cache key
    // headerBlacklist:  [],             // list of headers that should never be cached
    statusCodes: {
      // exclude: [], // list status codes to specifically exclude (e.g. [404, 403] cache all responses unless they had a 404 or 403 status)
      include: [200], // list status codes to require (e.g. [200] caches ONLY responses with a success/200 code)
    },
    // trackPerformance: false,          // enable/disable performance tracking... WARNING: super cool feature, but may cause memory overhead issues
    // headers: {
    //   // 'cache-control':  'no-cache' // example of header overwrite
    // },
    // respectCacheControl: false|true   // If true, 'Cache-Control: no-cache' in the request header will bypass the cache.
    ...opts,
  })
}
