// prettier-ignore
export function vs(input: any) {

    // ======== null ======== //
    if (input === null)
    return true
    

    
    // ======== string ======== //
    if (typeof input == 'string') {

        const clean = input?.trim?.().toLowerCase?.()

        // "null"
        if (clean === 'null')
        return true


        // default
        return false
    }



    // ======== default ======== //
    return false
}
