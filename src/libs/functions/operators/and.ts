// prettier-ignore
export function and(A: any, B: any) {

    if (['0', 'NaN', 'false', 'null', 'undefined'].includes(A))
    return A

    return A && B
}
