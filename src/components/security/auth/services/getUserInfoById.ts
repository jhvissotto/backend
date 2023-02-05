import { knex, sql } from '~/src/database'
import { resolvers } from '~/src/libs/helpers/operators'

// prettier-ignore
export async function getUserInfoById({ id_user }) {
  // sql
  type Data       = sql.td_user.SELECT.BY_EMAIL.Data
  const { query } = sql.td_user.SELECT.BY_EMAIL

  return await resolvers.d<Data[]>(knex.raw(query({ email: id_user })))
}
