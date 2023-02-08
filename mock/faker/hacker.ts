import { faker } from '.'

export const sample = {
  abbreviation: 'RSS',
  adjective: 'back-end',
  ingverb: 'programming',
  noun: 'system',
  phrase:
    "You can't connect the interface without overriding the multi-byte PCI transmitter!",
  verb: 'transmit',
}

// prettier-ignore
export const {
    abbreviation,
    adjective,
    ingverb,
    noun,
    phrase,
    verb,
} = faker.hacker

// prettier-ignore
export function all({
    abbreviation    = [],
    adjective       = [],
    ingverb         = [],
    noun            = [],
    phrase          = [],
    verb            = [],
}: {
    abbreviation?:  Parameters<typeof faker.hacker.abbreviation>,
    adjective?:     Parameters<typeof faker.hacker.adjective>,
    ingverb?:       Parameters<typeof faker.hacker.ingverb>,
    noun?:          Parameters<typeof faker.hacker.noun>,
    phrase?:        Parameters<typeof faker.hacker.phrase>,
    verb?:          Parameters<typeof faker.hacker.verb>,
}) {

    return {
        abbreviation:  faker.hacker.abbreviation(...abbreviation),
        adjective:     faker.hacker.adjective(   ...adjective),
        ingverb:       faker.hacker.ingverb(     ...ingverb),
        noun:          faker.hacker.noun(        ...noun),
        phrase:        faker.hacker.phrase(      ...phrase),
        verb:          faker.hacker.verb(        ...verb),
    } 
}
