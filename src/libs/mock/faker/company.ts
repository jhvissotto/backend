import { faker } from '.'

export const sample = {
  bs: 'streamline turn-key models',
  bsAdjective: 'bleeding-edge',
  bsBuzz: 'deploy',
  bsNoun: 'markets',
  catchPhrase: 'Synchronised interactive hardware',
  catchPhraseAdjective: 'Upgradable',
  catchPhraseDescriptor: 'uniform',
  catchPhraseNoun: 'hub',
  companySuffix: 'and Sons',
  name: 'Aufderhar Group',
  suffixes: ['Inc', 'and Sons', 'LLC', 'Group'],
}

export const {
  bs,
  bsAdjective,
  bsBuzz,
  bsNoun,
  catchPhrase,
  catchPhraseAdjective,
  catchPhraseDescriptor,
  catchPhraseNoun,
  companySuffix,
  name,
  suffixes,
} = faker.company

// prettier-ignore
export function all({
  bs                      = [],
  bsAdjective             = [],
  bsBuzz                  = [],
  bsNoun                  = [],
  catchPhrase             = [],
  catchPhraseAdjective    = [],
  catchPhraseDescriptor   = [],
  catchPhraseNoun         = [],
  companySuffix           = [],
  name                    = [],
  suffixes                = [],
}: {
  bs?:                     Parameters<typeof faker.company.bs>,
  bsAdjective?:            Parameters<typeof faker.company.bsAdjective>,
  bsBuzz?:                 Parameters<typeof faker.company.bsBuzz>,
  bsNoun?:                 Parameters<typeof faker.company.bsNoun>,
  catchPhrase?:            Parameters<typeof faker.company.catchPhrase>,
  catchPhraseAdjective?:   Parameters<typeof faker.company.catchPhraseAdjective>,
  catchPhraseDescriptor?:  Parameters<typeof faker.company.catchPhraseDescriptor>,
  catchPhraseNoun?:        Parameters<typeof faker.company.catchPhraseNoun>,
  companySuffix?:          Parameters<typeof faker.company.companySuffix>,
  name?:                   Parameters<typeof faker.company.name>,
  suffixes?:               Parameters<typeof faker.company.suffixes>,
}) {
  return {
    bs:                     faker.company.bs(                     ...bs),
    bsAdjective:            faker.company.bsAdjective(            ...bsAdjective),
    bsBuzz:                 faker.company.bsBuzz(                 ...bsBuzz),
    bsNoun:                 faker.company.bsNoun(                 ...bsNoun),
    catchPhrase:            faker.company.catchPhrase(            ...catchPhrase),
    catchPhraseAdjective:   faker.company.catchPhraseAdjective(   ...catchPhraseAdjective),
    catchPhraseDescriptor:  faker.company.catchPhraseDescriptor(  ...catchPhraseDescriptor),
    catchPhraseNoun:        faker.company.catchPhraseNoun(        ...catchPhraseNoun),
    companySuffix:          faker.company.companySuffix(          ...companySuffix),
    name:                   faker.company.name(                   ...name),
    suffixes:               faker.company.suffixes(               ...suffixes),
  }
}
