import { is } from "~/src/libs/functions/check";

// prettier-ignore
export function fullFilled<Item>(arr: Array<Item>) {

    // ======== not array ======== //
    if (!Array.isArray(arr))
    return null
    

    // ======== array ======== //
    const arrChecked = arr.map(item => is.filled(item))

    const result = arrChecked.every(item => item == true)

    return result
}
