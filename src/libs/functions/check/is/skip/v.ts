// prettier-ignore
export function v(input: any) {

    // zero
    if (input === 0)
    return true

    // NaN
    if (isNaN(input))
    return true

    // null
    if (input === null)
    return true

    // undefined
    if (input === undefined)
    return true





    // default
    return false
}
