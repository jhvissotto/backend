// prettier-ignore
export function listToArray(listText: string, char = ',') {

    return listText.split(char).map(i => i.trim()).filter(Boolean)
}
