import { is } from ".";
import { number } from "~/src/libs/functions/check/is";

// prettier-ignore
export function check(input) {

    const isNumeric = number.vs(input)

    const isZero = is.zero(input)
    const isUnique = is.unique(input)
    const isMany = is.many(input)


    const isNaN = Number.isNaN(input)
    const isFinite = Number.isFinite(input)
    const isInteger = Number.isInteger(input)
    const isSafeInteger = Number.isSafeInteger(input)

    return {
        isNumeric,

        isZero,
        isUnique,
        isMany,

        isNaN,
        isFinite,
        isInteger,
        isSafeInteger,
    }
}
