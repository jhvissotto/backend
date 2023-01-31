import { back } from '~/src/libs/functions/operators'

// prettier-ignore
export function promiseTimeout({ condition, call, fall, timeout }) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            condition
            ? resolve(back(call))
            : reject(back(fall))
        }, timeout)
    })
}
