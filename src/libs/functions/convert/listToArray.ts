import { is } from '~/src/libs/functions/check'

// prettier-ignore
export function listToArray(listText: string, char = ',') {

    return listText.split(char).map(i => i.trim()).filter(is.defined.vs)
}
