import { array } from '~/src/libs/functions'
import { Args } from '~/src/database/query/builder'

// prettier-ignore
export function v1(
    priorities?:    Args.prioritiesU, 
    lastPriority?:  Args.PriorityU,
) {

    let list = []


    if (priorities?.length) list.push(...priorities)
    if (lastPriority)       list.push(lastPriority)


    const qs = array.join(list, ', ')

    
    // console.log('qs', qs)
    return qs
}
