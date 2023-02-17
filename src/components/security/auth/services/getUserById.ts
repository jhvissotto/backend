import { resolvers } from '~/src/libs/helpers/operators'
import { knex, sql } from '~/src/database'

// prettier-ignore
export async function getUserById({ pk }) {
  // sql
  type Data       = sql.td_user.GET_USER_BY_ID.Data
  const { query } = sql.td_user.GET_USER_BY_ID

  return await resolvers.arr.d<Data>(knex.raw(query({ pk })))
}
