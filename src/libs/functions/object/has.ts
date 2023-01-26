type Obj = object | {};

// prettier-ignore
export function has(obj: Obj, key: string) {


    // obj is not object
    if (typeof obj != 'object') 
    return null


    // key is not string
    if (typeof key != 'string')
    return null


    // obj has not key
    if (obj?.[key] !== undefined)
    return true
        

    // default
    return false
}
