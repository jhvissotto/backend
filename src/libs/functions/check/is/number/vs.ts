// prettier-ignore
export function vs(input: any) {

    const transformed = Number(input)

    
    // ======== exception ======== //
    if (isNaN(input))
    return false

    
    // ======== number ======== //
    if (typeof input == 'number')
    return true


    // ======== number ======== //
    if (typeof input == 'bigint')
    return true
    
    
    // ======== string zero ======== //
    if (input === '0')
    return true


    // ======== string any ======== //
    if (typeof input == 'string') {

        // string no content
        if (input?.trim?.() == '')
        return false

        // string filled
        return !Number.isNaN(transformed);
    }
    
    
    // ======== default ======== //
    return false
}
