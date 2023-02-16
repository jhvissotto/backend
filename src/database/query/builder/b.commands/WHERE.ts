import { Args } from '~/src/database/query/builder'
import { __, fld, where_slug, valueOrBind } from '~/src/database/query/builder/a.fns'
import {} from '~/src/database/query/builder/b.commands'

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
