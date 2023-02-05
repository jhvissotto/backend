import { knex, sql } from '~/src/database'
import { resolvers } from '~/src/libs/helpers/operators'

// prettier-ignore
export async function getStaffById({ id_user })  {
  // sql
  type Data       = sql.td_staff.SELECT.BY_EMAIL.Data
  const { query } = sql.td_staff.SELECT.BY_EMAIL

  return await resolvers.d<Data[]>(knex.raw(query({ email: id_user })))
}
