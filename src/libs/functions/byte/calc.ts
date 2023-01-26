// prettier-ignore
export function calc(val: number, multiple: 'b' | 'kb' | 'mb' | 'gb' | 'tr') {

    // byte
    if (multiple === 'b')
    return val * 1024^0
    
    // kilobyte
    if (multiple === 'kb')
    return val * 1024^1

    // megabyte
    if (multiple === 'mb')
    return val * 1024^2

    // gigabyte
    if (multiple === 'gb')
    return val * 1024^3

    // terabyte
    if (multiple === 'tr')
    return val * 1024^4

    // other wise
    return NaN
}
