// prettier-ignore
export function boolean(input: any) {

    // ======== number ======== //
    if (input == 1)
    return true
    
    if (input == 0)
    return false


    // ======== string ======== //
    if (typeof input == 'string') {

        if (['true', 't', 'yes', 'y', '1'].includes(input.trim().toLowerCase()))
        return true
        
        if (['false', 'f', 'no', 'n', '0'].includes(input.trim().toLowerCase()))
        return false
    }

    
    // ======== default ======== //
    return null
}
