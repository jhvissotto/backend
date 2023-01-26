// prettier-ignore

export function many(input: number) {
    
    if (typeof input == 'number') {
        return input >= 2
    } else {
        return NaN
    }
}
