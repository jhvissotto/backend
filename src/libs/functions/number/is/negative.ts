// prettier-ignore
export function negative(input: number) {
    
    if (typeof input == 'number') {
        return input <= -1
    } else {
        return NaN
    }
}
