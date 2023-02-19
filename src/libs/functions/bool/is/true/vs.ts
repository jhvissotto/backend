// prettier-ignore
export function vs(input) {


    if (input === true)
    return true


    if (input === 1)
    return true


    if (['true', 't', 'yes', 'y', '1'].includes(input.trim().toLowerCase()))
    return true

    
    return false
}
