import { knex, sql } from '~/src/database'
import { resolvers } from '~/src/libs/helpers/operators'

export async function getUserInfoById({ id_user }) {
  // sql
  type Data = sql.GET_USER_INFO_BY_EMAIL.Data
  const { query } = sql.GET_USER_INFO_BY_EMAIL

  return await resolvers.d<Data[]>(knex.raw(query({ email: id_user })))
}
