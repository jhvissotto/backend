import { chance } from '.'

export const sample = {
  age: 43,
  gender: 'Female',
  birthday: '1975-06-14T13:19:36.968Z',
  cf: 'RSTRMI77D62F088C',
  cpf: '441.651.074-84',
  first: 'Mario',
  last: 'Rodríguez',
  name: 'Timothy Garner',
  name_prefix: 'Mrs.',
  name_suffix: 'III',
  prefix: 'Dr.',
  ssn: '044-95-8431',
  suffix: 'Ph.D.',
}

// prettier-ignore
export const {
  age,
  gender,
  birthday,
  cf,
  cpf,
  first,
  last,
  name,
  name_prefix,
  name_suffix,
  prefix,
  ssn,
  suffix,
} = chance

// prettier-ignore
export function all({
  age         = [],
  gender      = [],
  birthday    = [],
  cf          = [],
  cpf         = [],
  first       = [],
  last        = [],
  name        = [],
  name_prefix = [],
  name_suffix = [],
  prefix      = [],
  ssn         = [],
  suffix      = [],
}: {
  age?:          Parameters<typeof chance.age>,
  gender?:       Parameters<typeof chance.gender>,
  birthday?:     Parameters<typeof chance.birthday>,
  cf?:           Parameters<typeof chance.cf>,
  cpf?:          Parameters<typeof chance.cpf>,
  first?:        Parameters<typeof chance.first>,
  last?:         Parameters<typeof chance.last>,
  name?:         Parameters<typeof chance.name>,
  name_prefix?:  Parameters<typeof chance.name_prefix>,
  name_suffix?:  Parameters<typeof chance.name_suffix>,
  prefix?:       Parameters<typeof chance.prefix>,
  ssn?:          Parameters<typeof chance.ssn>,
  suffix?:       Parameters<typeof chance.suffix>,
}) {

  return {
    age:          chance.age(         ...age),
    gender:       chance.gender(      ...gender),
    birthday:     chance.birthday(    ...birthday),
    cf:           chance.cf(          ...cf),
    cpf:          chance.cpf(         ...cpf),
    first:        chance.first(       ...first),
    last:         chance.last(        ...last),
    name:         chance.name(        ...name),
    name_prefix:  chance.name_prefix( ...name_prefix),
    name_suffix:  chance.name_suffix( ...name_suffix),
    prefix:       chance.prefix(      ...prefix),
    ssn:          chance.ssn(         ...ssn),
    suffix:       chance.suffix(      ...suffix),
  } 
}
