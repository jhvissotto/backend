import { is } from ".";

// prettier-ignore
export function check(input: string) {

    const isClean = is.clean(input)
    const isEmpty = is.empty(input)
    const isFilled = is.filled(input)

    return {
        isClean,
        isEmpty,
        isFilled,
    }
}
