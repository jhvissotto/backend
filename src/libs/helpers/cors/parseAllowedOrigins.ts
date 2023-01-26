import { convert } from "~/src/libs/functions";

// prettier-ignore
export function parseAllowedOrigins(allowedOrigins: string | string[], char = ',') {
    
    // ======== case string list ======== //
    if (typeof allowedOrigins == 'string') {

        const allowedArray = convert.listToArray(allowedOrigins, char)

        const length = allowedArray?.length

        return length ? allowedArray : '*' 
    }



    // ======== case array ======== // 
    if (Array.isArray(allowedOrigins)) {

        const length = allowedOrigins?.length

        return length ? allowedOrigins : '*'
    }


    // ======== default ======== //
    return '*'
}
