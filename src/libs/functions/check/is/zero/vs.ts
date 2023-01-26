// prettier-ignore
export function vs(input: any) {

    // ======== zero ======== //
    if (input === 0)
    return true

    
    
    // ======== string ======== //
    if (typeof input == 'string') {

        const clean = input?.trim?.().toLowerCase?.()

        
        // "zero"
        if (clean == '0')
        return true


        // default
        return false
    }



    // ======== default ======== //
    return false
}
