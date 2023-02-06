import { is } from '~/src/libs/functions/array'

type Field = string
type Order = 'ASC' | 'DESC'

type Item = [Field, Order]
type List = Item[]

// prettier-ignore
export function priority(input: Item | List) {


    // input is List
    if (is.arrayOf(input).array) {

        const input_list = input as List

        return input_list.map(([field, order]) => `${field} ${order}`).join(', ')
    }

    
    // input is Item
    else {
        const input_item = input as Item

        const [field, order] = input_item
        
        return `${field} ${order}`
    }
}
