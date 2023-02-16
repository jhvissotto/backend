import { Args } from '~/src/database/query/builder'
import { __, fld, where_slug, valueOrBind } from '~/src/database/query/builder/a.fns'
import {} from '~/src/database/query/builder/b.commands'

// prettier-ignore
export function WHERES(list: Array<{
    field:  Args.Field
    by:     Args.BY,
    pk?:    Args.PK
    slug?:  Args.Slug
    rn?:    Args.RN
}>, langs?: Args.Langs[]) {

    
    const qs = `
        WHERE (
            ${list.map(i => {

                const PK    = i.by == 'PK'
                const SLUG  = i.by == 'SLUG'
                const RN    = i.by == 'RN'

                return `
                    ${__(PK)}   ${fld('pk', i.field)} = ${valueOrBind(fld('pk', i.field), i.pk)}
                    ${__(SLUG)} ${where_slug(langs, i.field, i.slug)}
                    ${__(RN)}   ${fld('rn', i.field)} = ${valueOrBind(fld('rn', i.field), i.rn)}
                `
            }).join('\n AND \n')}
        )
    `

    // console.log('qs', qs)
    return qs
}
