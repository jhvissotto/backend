// prettier-ignore
export function number(input: any): number {

    
    // // exception: [undefined]
    // if (Array.isArray(input) && input?.length && input[0] === undefined) 
    // return 0
    
    // // exception: undefined
    // if (input === undefined)
    // return 0
    

    
    // exception: ""
    if (typeof input == 'string' && input?.trim() == '')
    return NaN
    
    // exception: [""]
    if (Array.isArray(input) && input?.length) {

        const itemFirst = input[0] 

        if (typeof itemFirst == 'string' && itemFirst?.trim() == '')
        return NaN
    }



    // default
    return Number(input)
}
