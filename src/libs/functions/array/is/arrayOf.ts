// prettier-ignore
export function arrayOf<Item>(input: Array<Item | any>) {

    const item_first = input?.[0]
    
    
    const isArrayOfObject = typeof item_first == 'object'
    
    const isArrayOfArray  = Array.isArray(item_first)


    return {
        object: isArrayOfObject,
        array:  isArrayOfArray,
        isArrayOfObject, 
        isArrayOfArray,
    }
}
