import { ORDER_BY } from './ORDER_BY'
import { Args } from '../Args'
import { PARTITION_BY } from './PARTITION_BY'

// prettier-ignore
export function RN(
    field: Args.Field,
    partOpts: {
        priorities?: Parameters<typeof PARTITION_BY>[0]
        disable?:    Parameters<typeof PARTITION_BY>[1]
    }, 
    orderOpts: Parameters<typeof ORDER_BY>[1] & { 
        sort:  Parameters<typeof ORDER_BY>[0] 
    }
) {
    // options
    const { priorities, disable } = partOpts
    const { sort, ...opts       } = orderOpts
    

    // query
    const qs = `
        ROW_NUMBER() OVER(
            ${PARTITION_BY(priorities, disable)} 
            ${ORDER_BY(sort, opts)}
        ) AS rn_${field}    
    `


    // console.log('qs', qs)
    return qs
}
