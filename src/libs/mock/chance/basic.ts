import { chance } from '.'

export const sample = {
  bool: true,
  character: 'i',
  falsy: 0,
  floating: 819700707203.4816,
  integer: -6647149815136256,
  letter: 's',
  natural: 7061805983596544,
  string: 'juepwuqk78L',
}

// prettier-ignore
export const {
  bool,
  character,
  falsy,
  floating,
  integer,
  letter,
  natural,
  string,
  template,
} = chance

// prettier-ignore
export function all({
  bool        = [],
  character   = [],
  falsy       = [],
  floating    = [],
  integer     = [],
  letter      = [],
  natural     = [],
  string      = [],
  // template    = [],
}: {
  bool?:       Parameters<typeof chance.bool>,
  character?:  Parameters<typeof chance.character>,
  falsy?:      Parameters<typeof chance.falsy>,
  floating?:   Parameters<typeof chance.floating>,
  integer?:    Parameters<typeof chance.integer>,
  letter?:     Parameters<typeof chance.letter>,
  natural?:    Parameters<typeof chance.natural>,
  string?:     Parameters<typeof chance.string>,
  // template:    Parameters<typeof chance.template>,
}) {

  return {
    bool:        chance.bool(       ...bool),
    character:   chance.character(  ...character),
    falsy:       chance.falsy(      ...falsy),
    floating:    chance.floating(   ...floating),
    integer:     chance.integer(    ...integer),
    letter:      chance.letter(     ...letter),
    natural:     chance.natural(    ...natural),
    string:      chance.string(     ...string),
    // template:    chance.template(   ...template),
  } 
}
