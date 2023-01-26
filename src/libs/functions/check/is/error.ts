import { obj } from "~/src/libs/functions";

// prettier-ignore
export function error(e: any) {


    // error
    if (e instanceof Error)
    return true


    // object
    if (obj.has(e, 'name') && obj.has(e, 'message'))
    return true
    
    
    // default
    return false
}
