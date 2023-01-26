// prettier-ignore
export function vs(input: any) {

    // ======== null ======== //
    if (input === null)
    return true

    // ======== undefined ======== //
    if (input === undefined)
    return true



    // ======== string ======== //
    if (typeof input == 'string') {

        const clean = input?.trim?.().toLowerCase?.()


        // "null"
        if (clean == 'null')
        return true


        // "undefined"
        if (clean == 'undefined')
        return true



        // default
        return false
    }

    
    
    // ======== default ======== //
    return false
}
