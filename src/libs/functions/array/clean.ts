// prettier-ignore
export function clean<Element>(arr: Array<Element>) {

    const isArray = Array.isArray(arr)

    const arrClean = isArray ? arr?.filter(Boolean) : arr

    return arrClean
}
