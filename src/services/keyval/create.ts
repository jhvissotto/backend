import type { SetRequired } from '~/src/libs/Types'
import { KeyVal, LRU } from '~/src/libs/helpers/data'

// prettier-ignore
export function create(
    options: SetRequired<ConstructorParameters<typeof KeyVal>[1], 'uri'>,
    custom?: {
        LRU?: ConstructorParameters<typeof LRU.v2>[0]
    }
) {

    // arguments
    const { uri, store, ...opts } = options


    
    // ========================= //
    // ======== default ======== //
    // ========================= //
    const memory = new KeyVal({
        ...opts,
    })


    // ===================== //
    // ======== lru ======== //
    // ===================== //
    // @ts-ignore
    const lru = new KeyVal({ 
        store: new LRU.v2({ 
            maxSize: 500,
            ...custom?.LRU,
        }),
        ...opts, 
    })


    // ======================= //
    // ======== redis ======== //
    // ======================= //
    const redis = new KeyVal({
        uri,
      ...opts,
    })
    

    return { 
        memory,
        lru,  
        redis, 
    }
}
