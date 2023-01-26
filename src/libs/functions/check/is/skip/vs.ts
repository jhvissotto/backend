// prettier-ignore
export function vs(input: any) {

    // ======== zero ======== //
    if (input === 0)
    return true

    // ======== NaN ======== //
    if (isNaN(input))
    return true

    // ======== null ======== //
    if (input === null)
    return true

    // ======== undefined ======== //
    if (input === undefined)
    return true

    

    
    // ======== string ======== //
    if (typeof input == 'string') {

        const clean = input?.trim?.().toLowerCase?.()


        // "zero"
        if (clean == '0')
        return true

        // "nan"
        if (clean == 'nan')
        return true

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
