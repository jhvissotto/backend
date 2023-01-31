// prettier-ignore
export function value(input: any) {

    if (input === undefined)
    return false

    if (input === null)
    return false

    if (input === '')
    return false
    
    if (input === ' ')
    return false

    if (Number.isNaN(input))
    return false



    // default
    return true
}
