import { is } from "~/src/libs/functions/check";

// prettier-ignore
export function errors(ers: any) {


    // isArray?    
    if (Array.isArray(ers) && ers?.length) {
        
        const itemFirst = ers[0]

        return is.error(itemFirst)
    } 


    // default
    return false
}
