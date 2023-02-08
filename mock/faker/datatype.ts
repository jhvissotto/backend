import { faker } from '.'

// prettier-ignore
export const sample = {
  array: [4269, 'UA|L>Sk`DB', 3686, 14408, '\\\\:JLVI}8&', 45371, '48tfM!5A&*', 4320, 7276, 'kfZ$jgKzj3'],
  bigInt: 313005182542617n,
  boolean: true,
  datetime: '2039-05-08T19:35:50.227Z',
  float: 73670.99,
  hexadecimal: '0xA',
  json: '{"foo":47746,"bar":30645,"bike":"[v)R?B\\"A1I","a":99367,"b":"InZQz&Gr61","name":"TvA4{eD8Zr","prop":"Ge2(]Ih)3P"}',
  number: 33816,
  string: ';o^fzCX1h%',
  uuid: 'e8ab888c-0522-47de-a409-fa99f2d8431e',
}

export const {
  array,
  bigInt,
  boolean,
  datetime,
  float,
  hexadecimal,
  json,
  number,
  string,
  uuid,
} = faker.datatype

// prettier-ignore
export function all({
  array       = [],
  bigInt      = [],
  boolean     = [],
  datetime    = [],
  float       = [],
  hexadecimal = [],
  json        = [],
  number      = [],
  string      = [],
  uuid        = [],
}: {
  array?:       Parameters<typeof faker.datatype.array>,
  bigInt?:      Parameters<typeof faker.datatype.bigInt>,
  boolean?:     Parameters<typeof faker.datatype.boolean>,
  datetime?:    Parameters<typeof faker.datatype.datetime>,
  float?:       Parameters<typeof faker.datatype.float>,
  hexadecimal?: Parameters<typeof faker.datatype.hexadecimal>,
  json?:        Parameters<typeof faker.datatype.json>,
  number?:      Parameters<typeof faker.datatype.number>,
  string?:      Parameters<typeof faker.datatype.string>,
  uuid?:        Parameters<typeof faker.datatype.uuid>,
}) {
  return {
    array:       faker.datatype.array(        ...array),
    bigInt:      faker.datatype.bigInt(       ...bigInt),
    boolean:     faker.datatype.boolean(      ...boolean),
    datetime:    faker.datatype.datetime(     ...datetime),
    float:       faker.datatype.float(        ...float),
    hexadecimal: faker.datatype.hexadecimal(  ...hexadecimal),
    json:        faker.datatype.json(         ...json),
    number:      faker.datatype.number(       ...number),
    string:      faker.datatype.string(       ...string),
    uuid:        faker.datatype.uuid(         ...uuid),
  }
}
