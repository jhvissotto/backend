import { faker } from '.'

export const sample = {
  alpha: 'n',
  alphaNumeric: 'p',
  locale: 'cz',
  numeric: '6',
  word: 'Wooden',
  words: 'Convertible deteriorate under',
}

// prettier-ignore
export const {
    alpha,
    alphaNumeric,
    locale,
    numeric,
    word,
    words
} = faker.random

// prettier-ignore
export function all({
    alpha           = [],
    alphaNumeric    = [],
    locale          = [],
    numeric         = [],
    word            = [],
    words           = [],
}: {
    alpha?:         Parameters<typeof faker.random.alpha>,
    alphaNumeric?:  Parameters<typeof faker.random.alphaNumeric>,
    locale?:        Parameters<typeof faker.random.locale>,
    numeric?:       Parameters<typeof faker.random.numeric>,
    word?:          Parameters<typeof faker.random.word>,
    words?:         Parameters<typeof faker.random.words>,
}) {

    return {
        alpha:         faker.random.alpha(          ...alpha),
        alphaNumeric:  faker.random.alphaNumeric(   ...alphaNumeric),
        locale:        faker.random.locale(         ...locale),
        numeric:       faker.random.numeric(        ...numeric),
        word:          faker.random.word(           ...word),
        words:         faker.random.words(          ...words),
    } 
}
