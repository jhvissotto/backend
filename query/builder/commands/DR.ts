import { Args } from '~/query/builder/Args'
import { ORDER_BY } from './ORDER_BY'

// prettier-ignore
export function DR(
    field: Args.Field,
    orderOpts: Parameters<typeof ORDER_BY>[1] & { 
        sort:  Parameters<typeof ORDER_BY>[0] 
    }
) {

    // args
    const { sort, ...opts } = orderOpts


    
    // query
    let qs = `
        DENSE_RANK() OVER(${ORDER_BY(sort, opts)}) AS sr_${field}
    `
    

    
    // console.log('qs', qs)
    return qs
}
