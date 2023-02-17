import { Knex } from '~/src/libs/packs'

export function initialize(...args: Parameters<typeof Knex.create>) {
  // foo
  const knex = Knex.create(...args)

  knex.on('connection', () => {
    console.log('>> Database connected')
  })

  knex.on('start', builder => {
    console.log('>> onStat:', builder.toQuery())
  })

  // knex.on('query', query => {
  //   console.log('>> onQuery', query)
  // })

  return { knex }
}
