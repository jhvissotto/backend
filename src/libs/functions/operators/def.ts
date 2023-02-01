import { has } from '~/src/libs/functions/check'

// prettier-ignore
export function def<A, B>(a: A, b: B) {

    return has.value(a) ? a : b

}
