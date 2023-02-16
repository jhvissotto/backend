import { check } from '~/src/libs/functions/'
import { is } from '~/src/libs/functions/array'
import { Args } from '~/src/database/query/builder'

// prettier-ignore
export function v2(input: Args.PriorityD | Args.PrioritiesD) {

    // input is empty
    if (check.is.empty(input))
    return ``
    

    
    // input is List
    if (is.arrayOf(input).array) {

        const input_list = input as Args.PrioritiesD

        return input_list.map(([field, order]) => `${field} ${order}`).join(', ')
    }

    
    // input is Item
    else {
        const input_item = input as Args.PriorityD

        const [field, order] = input_item
        
        return `${field} ${order}`
    }
}
