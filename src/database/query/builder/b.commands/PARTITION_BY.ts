import { is } from '~/src/libs/functions/check'
import { Args } from '~/src/database/query/builder'
import { __, priority } from '~/src/database/query/builder/a.fns'
import {} from '~/src/database/query/builder/b.commands'

// prettier-ignore
export function PARTITION_BY(
    priorities?:    Parameters<typeof priority.v1>[0],
    lastPriority?:  Parameters<typeof priority.v1>[1],
    avoid?:         boolean
) {
    
    const skip = avoid || is.empty(priorities)
    
    
    
    const qs = skip ? '' : `-- sql
        PARTITION BY ${priority.v1(priorities, lastPriority)}
    `


    // console.log('qs', qs)
    return qs
}
