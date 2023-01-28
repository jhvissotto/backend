// libs
import { resolvers } from '~/src/libs/helpers'
import { array, calc } from '~/src/libs/functions'
// app
import { database } from '~/src'

export async function querySelect({
  table,
  wk = '',
  we = '',
  wv = '',
  items = 10,
  page = 0,
  randKey = null,
}) {
  // FILTER
  const whereHasAllParams = array.is.fullFilled([wk, we, wv])
  const where = whereHasAllParams ? `${wk} ${we} ${wv}` : ''

  // AMOUNT
  const { limit, offset } = calc.pagination(items, page)

  // ORDER
  const orderBy = randKey ? `RAND(${randKey})` : `id_${table} DESC`

  return await resolvers.d<any[]>(
    database.knex
      .select('*')
      .from(table)
      .whereRaw(where)
      .limit(limit)
      .offset(offset)
      .orderByRaw(orderBy)
  )
}
