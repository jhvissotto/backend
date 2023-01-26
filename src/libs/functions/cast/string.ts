// prettier-ignore
export function string(input: any): string {
    
    // undefined
    if (typeof input === undefined)
    return ''
    
    // null
    if (input === null)
    return ''

    
    
    // function
    if (typeof input == 'function') 
    return input?.name || 'function'
    
    
    // object
    if (typeof input == 'object') 
    return JSON.stringify(input)


    
    // default
    return String(input)    
}
