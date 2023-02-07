import { Args } from '../Args'
import { valueOrBind } from './valueOrBind'

// prettier-ignore
export function where_slug(
    langs:  Args.Langs[],
    field:  Args.Field,
    value?: string, 
) {
    // ================ check ================ //
    const has_lang = {
        en: langs?.includes?.('en'),
        fr: langs?.includes?.('fr'),
        es: langs?.includes?.('es'),
        pt: langs?.includes?.('pt'),
        it: langs?.includes?.('it'),
    }
    
    
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



    return qs
}
