// prettier-ignore
export function langs(arr: string[]) {

    const has_lang = {
        en: arr?.includes?.('en'),
        fr: arr?.includes?.('fr'),
        es: arr?.includes?.('es'),
        pt: arr?.includes?.('pt'),
        it: arr?.includes?.('it'),
    }
    
    return { has_lang }
}
