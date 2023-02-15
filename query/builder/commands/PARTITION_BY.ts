import { is } from '~/src/libs/functions/check'
import { priority } from '../_fns/priority'

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
