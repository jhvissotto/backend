import { Args } from './Args'

// prettier-ignore
export function fld(
    fk:     Args.FldKey,  
    field:  string | number, 
    lang?:  Args.Langs
) {

    if (fk == 'slug' && lang)
    return `${fk}_${lang}_${field}`
    
    else
    return `${fk}_${field}`
}
