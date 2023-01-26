// prettier-ignore
export function vs(input: any) {

    
    // ======== undefined ======== //
    if (input === undefined)
    return false



    // ======== string ======== //
    if (typeof input == 'string') {
        
        // undefined
        if (input == '')
        return false


        // default
        return true
    }



    // ======== default ======== //
    return true
}
