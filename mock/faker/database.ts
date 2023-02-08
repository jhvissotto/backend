import { faker } from '.'

export const sample = {
  collation: 'cp1250_bin',
  column: 'updatedAt',
  engine: 'MyISAM',
  mongodbObjectId: 'abfee266bd3a1d9d8dccdf61',
  type: 'bigint',
}

// prettier-ignore
export const {
    collation,
    column,
    engine,
    mongodbObjectId,
    type
} = faker.database

// prettier-ignore
export function all({
    collation       = [],
    column          = [],
    engine          = [],
    mongodbObjectId = [],
    type            = [],
}: {
    collation?:        Parameters<typeof faker.database.collation>,
    column?:           Parameters<typeof faker.database.column>,
    engine?:           Parameters<typeof faker.database.engine>,
    mongodbObjectId?:  Parameters<typeof faker.database.mongodbObjectId>,
    type?:             Parameters<typeof faker.database.type>,
}) {

    return {
        collation:        faker.database.collation(         ...collation),
        column:           faker.database.column(            ...column),
        engine:           faker.database.engine(            ...engine),
        mongodbObjectId:  faker.database.mongodbObjectId(   ...mongodbObjectId),
        type:             faker.database.type(              ...type),
    }
}
