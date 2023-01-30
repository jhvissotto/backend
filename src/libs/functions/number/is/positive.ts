// prettier-ignore
export function positive(input: number) {
    
    if (typeof input == 'number') {
        return input >= +1 
    } else {
        return NaN
    }
}
