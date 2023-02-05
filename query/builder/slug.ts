import { check } from '~/src/libs/functions'
import { _, Args } from '.'

// prettier-ignore
export function slug(
    langs:  Args.Langs[],
    field:  string,
    value?: string, 
) {
    // ======================================= //
    // ================ check ================ //
    // ======================================= //
    const has_value = check.has.value(value)

    const has_lang = {
        en: langs?.includes?.('en'),
        fr: langs?.includes?.('fr'),
        es: langs?.includes?.('es'),
        pt: langs?.includes?.('pt'),
        it: langs?.includes?.('it'),
    }
    
    
    
    // =================================================== //
    // ================ prepare key VALUE ================ //
    // =================================================== //
    const bind_slug_field   = `:slug_${field}`
    const valueOrBind       = has_value ? value : bind_slug_field
    
    

    // =========================================== //
    // ================ the query ================ //
    // =========================================== //
    const slugs = {
        en: `slug_en_${field} = ${valueOrBind}`,
        fr: `slug_fr_${field} = ${valueOrBind}`,
        es: `slug_es_${field} = ${valueOrBind}`,
        pt: `slug_pt_${field} = ${valueOrBind}`,
        it: `slug_it_${field} = ${valueOrBind}`,
    }

    const qs = [
        has_lang.en ? slugs.en : null,
        has_lang.fr ? slugs.fr : null,
        has_lang.es ? slugs.es : null,
        has_lang.pt ? slugs.pt : null,
        has_lang.it ? slugs.it : null,
    ]
    .filter(Boolean)
    .join('\n OR ')



    return qs
}
