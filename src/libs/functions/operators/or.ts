// prettier-ignore
export function or(A: any, B: any) {

    // skip
    if (['0', 'NaN', 'false', 'null', 'undefined'].includes(A))
    return B
    
    
    // default
    return A || B
}
