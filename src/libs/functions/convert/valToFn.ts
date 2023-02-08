// prettier-ignore
export function valToFn<Input>(input: Input) {

    if (typeof input == 'function')
    return input

    else
    return () => input
}
