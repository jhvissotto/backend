import { Args } from '~/query/builder'
import { __ } from '~/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/query/builder/b.commands'

// prettier-ignore
export function RN(
    field: Args.Field,
    partOpts: {
        priorities?: Parameters<typeof PARTITION_BY>[0]
        disable?:    Parameters<typeof PARTITION_BY>[1]
    }, 
    orderOpts: Parameters<typeof ORDER_BY>[1] & { 
        sort:  Parameters<typeof ORDER_BY>[0] 
    },
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
