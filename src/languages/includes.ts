import type { List } from '.'

// prettier-ignore
export function includes(arr: List[]) {

    const has_lang = {
        en: arr?.includes?.('en'),
        es: arr?.includes?.('es'),
        fr: arr?.includes?.('fr'),
        it: arr?.includes?.('it'),
        pt: arr?.includes?.('pt'),
    }
    
    return { has_lang }
}
