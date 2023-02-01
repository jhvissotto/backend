// libs
import { resolvers } from '~/src/libs/helpers/operators'
import { array, calc } from '~/src/libs/functions'
import { pipe, when } from '~/src/libs/functions/operators'
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
  // const orderBy = randKey ? `RAND(${randKey})` : `id_${table} DESC`

  return await resolvers.d<any[]>(
    pipe.v(database.knex)(
      _ => _.select('*'),
      _ => _.from(table),
      _ => _.whereRaw(where),
      _ => _.limit(limit),
      _ => _.offset(offset),
      _ => (randKey ? _.orderByRaw(`RAND(${randKey})`) : _)
    )
  )
}
