import { Args } from '../Args'
import { __ } from '../_fns/__'
import { fld } from '../_fns/fld'
import { valueOrBind } from '../_fns/valueOrBind'
import { where_slug } from '../_fns/where_slug'

// prettier-ignore
export function WHERE({ field, by, pk, slug, rn }: {
    field:  Args.Field
    by:     Args.BY,
    pk?:    Args.PK
    slug?:  Args.Slug
    rn?:    Args.RN
},  langs?: Args.Langs[]) {
    
    const PK    = by == 'PK'
    const SLUG  = by == 'SLUG'
    const RN    = by == 'RN'
    

    const qs = `
        WHERE (
            ${__(PK)}   ${fld('pk', field)} = ${valueOrBind(fld('pk', field), pk)}
            ${__(SLUG)} ${where_slug(langs, field, slug)}
            ${__(RN)}   ${fld('rn', field)} = ${valueOrBind(fld('rn', field), rn)}
        )
    ` 
    
    // console.log('qs', qs)
    return qs
}
