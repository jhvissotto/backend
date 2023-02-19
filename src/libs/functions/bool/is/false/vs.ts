// prettier-ignore
export function vs(input) {


    if (input === false)
    return true


    if (input === 0)
    return true


    if (['false', 'f', 'no', 'n', '0'].includes(input.trim().toLowerCase()))
    return true

    
    return false
}
