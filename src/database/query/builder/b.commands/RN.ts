import { Args } from '~/src/database/query/builder'
import { __ } from '~/src/database/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/src/database/query/builder/b.commands'

// prettier-ignore
export function RN(
    field: Args.Field,
    partBy: {
        priorities?:    Parameters<typeof PARTITION_BY>[0]
        lastPriority?:  Parameters<typeof PARTITION_BY>[1]
        avoid?:         Parameters<typeof PARTITION_BY>[2]
    }, 
    orderBy:  Parameters<typeof ORDER_BY>[1] & { 
        sort: Parameters<typeof ORDER_BY>[0] 
    },
) {

    
    // query
    const qs = `
        ROW_NUMBER() OVER(
            ${PARTITION_BY(partBy?.priorities,  partBy?.lastPriority,  partBy?.avoid)} 
            ${ORDER_BY(orderBy.sort,  orderBy)}
        ) AS rn_${field}    
    `



    // console.log('qs', qs)
    return qs
}
