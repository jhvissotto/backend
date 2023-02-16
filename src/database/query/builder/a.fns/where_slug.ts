import { check } from '~/src/libs/functions/array'
import { Args } from '~/src/database/query/builder'
import { valueOrBind } from '~/src/database/query/builder/a.fns'

// prettier-ignore
export function where_slug(
    langs:  Args.Langs[],
    field:  Args.Field,
    value?: string, 
) {
    // ================ check ================ //
    const { has_lang } = check.langs(langs)
    
    

    // ================ prepare key VALUE ================ //
    const _valueOrBind = valueOrBind(`slug_${field}`, value)
    
    

    // ================ the query ================ //
    const slugs = {
        en: `slug_en_${field} = ${_valueOrBind}`,
        fr: `slug_fr_${field} = ${_valueOrBind}`,
        es: `slug_es_${field} = ${_valueOrBind}`,
        pt: `slug_pt_${field} = ${_valueOrBind}`,
        it: `slug_it_${field} = ${_valueOrBind}`,
    }

    const qs = [
        has_lang.en ? slugs.en : null,
        has_lang.fr ? slugs.fr : null,
        has_lang.es ? slugs.es : null,
        has_lang.pt ? slugs.pt : null,
        has_lang.it ? slugs.it : null,
    ]
    .filter(Boolean)
    .join(' OR \n')



    // console.log('qs', qs)
    return qs
}
