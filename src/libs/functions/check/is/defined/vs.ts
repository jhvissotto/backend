// prettier-ignore
export function vs(input: any) {

    
    // undefined
    if (input === undefined)
    return false


    // string empty
    if (typeof input == 'string'  &&  input == '') 
    return false



    // default
    return true
}
