// prettier-ignore
export function vs(input: any) {

    // ======== NaN ======== //
    if (isNaN(input))
    return true

    
    
    // ======== string ======== //
    if (typeof input == 'string') {

        const clean = input?.trim?.().toLowerCase?.()

        
        // "nan"
        if (clean == 'nan')
        return true


        // default
        return false
    }



    // ======== default ======== //
    return false
}
