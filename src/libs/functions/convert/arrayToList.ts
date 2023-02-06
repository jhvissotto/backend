import { is } from '~/src/libs/functions/check'

// prettier-ignore
export function arrayToList<Elem>(input: Array<Elem>, char = ', ') {

    return input.filter(is.defined.vs).join(char)
}
