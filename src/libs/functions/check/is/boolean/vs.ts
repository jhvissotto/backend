// prettier-ignore
export function vs(input: any) {

    if (typeof input == 'boolean')
    return true
    
    
    if (input === 1)
    return true
    
    if (input === 0)
    return true
    
    
    if (typeof input == 'string')
    return ['1', '0', 'true', 'false', 't', 'f', 'yes', 'no', 'y', 'n'].includes(input.trim().toLowerCase())

    
    return false
}
