// prettier-ignore
export function vs(input: any) {

    // ======== undefined ======== //
    if (input === undefined)
    return true


    // ======== string ======== //
    if (typeof input == 'string') {

        const clean = input?.trim?.().toLowerCase?.()

        
        // "undefined"
        if (clean == 'undefined')
        return true


        // default
        return false
    }

    
    
    // ======== default ======== //
    return false
}
