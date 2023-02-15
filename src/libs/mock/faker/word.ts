import { faker } from '.'

export const sample = {
  adjective: 'impressionable',
  adverb: 'doubtfully',
  conjunction: 'though',
  interjection: 'ah',
  noun: 'brewer',
  preposition: 'plus',
  verb: 'attach',
}

// prettier-ignore
export const {
    adjective,
    adverb,
    conjunction,
    interjection,
    noun,
    preposition,
    verb    
} = faker.word

// prettier-ignore
export function all({
    adjective    = [],
    adverb       = [],
    conjunction  = [],
    interjection = [],
    noun         = [],
    preposition  = [],
    verb         = [],
}: {
    adjective?:    Parameters<typeof faker.word.adjective>,
    adverb?:       Parameters<typeof faker.word.adverb>,
    conjunction?:  Parameters<typeof faker.word.conjunction>,
    interjection?: Parameters<typeof faker.word.interjection>,
    noun?:         Parameters<typeof faker.word.noun>,
    preposition?:  Parameters<typeof faker.word.preposition>,
    verb?:         Parameters<typeof faker.word.verb>,
}) {
    
    return {
        adjective:    faker.word.adjective(     ...adjective),
        adverb:       faker.word.adverb(        ...adverb),
        conjunction:  faker.word.conjunction(   ...conjunction),
        interjection: faker.word.interjection(  ...interjection),
        noun:         faker.word.noun(          ...noun),
        preposition:  faker.word.preposition(   ...preposition),
        verb:         faker.word.verb(          ...verb)
    } 
}
