import { is } from '~/src/libs/functions/check'
import { Args } from '~/query/builder'
import { __, priority } from '~/query/builder/a.fns'
import {} from '~/query/builder/b.commands'

// prettier-ignore
export function PARTITION_BY(
    priorities?: Parameters<typeof priority>[0],
    disable?:    boolean
) {
    
    const isDisabled = disable || is.empty(priorities)
    
    
    
    const qs = isDisabled ? '' : `--sql
        PARTITION BY ${priorities}
    `


    // console.log('qs', qs)
    return qs
}
