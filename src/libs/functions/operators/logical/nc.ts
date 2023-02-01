// prettier-ignore
export function nc(A: any, B: any) {

    // skip
    if (['null', 'undefined'].includes(A))
    return B
    
    
    // default
    return A ?? B
}
