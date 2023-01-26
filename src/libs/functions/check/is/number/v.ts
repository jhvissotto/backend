// prettier-ignore
export function v(input: any) {

    // exception
    if (isNaN(input))
    return false

    // number
    if (typeof input == 'number')
    return true


    // default
    return false
}
