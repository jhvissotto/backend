// import { WITH } from './query/builder2/WITH'
// import { tv_ } from './query/builder2/VISIBLE'
// import { CHECK } from './query/builder2/CHECK'

import { CHECK } from './query/builder/queries/CHECK'
import { GET_ONE_X_BY_ID } from './query/builder/queries/GET_ONE_X_BY_ID'

CHECK({
    withVisible: true,
    table: 'user',
    by: 'PK',
    pk: 'email123',
})

// prettier-ignore
// const { name, qs } = GET_ONE_X_BY_ID({
//     tableX: ['tv', 'user'],
//     by: 'PK',
//     pk: 'email123'
// }, {
//     langs: ['en'],
//     items: 50,
// })

// console.log('name', name)
// console.log('qs', qs)

// prettier-ignore

// const x = CHECK({
//   table: 'post',
//   by: 'SLUG',
//   langs: ['en', 'pt'],
//   slug: 'title-123',
// })

// console.log('x', x)

// // prettier-ignore
// const qs = WITH([
//     tv_('user'),
//     tv_('post'),
// ])

// console.log('qs', qs)

// const q = tv_('user', { hasLaunchDate: true })
// console.log('q', q)

// // import { cast } from '~/src/libs/functions'
// // import { app } from '~/src'
// // import { Knex } from '~/src/libs/packs'
// // import { knex } from '~/src/database'

// // import { func } from './src/libs/functions'

// // import { has } from '~/src/libs/functions/check'
// // import { def } from '~/src/libs/functions/operators'

// // // prettier-ignore
// // type Select = (
// //     count: '' | 'ALL' | 'ONE' | 'MANY',
// //     table: string
// // ) => ({ limit }?: { limit?: number }) => ({
// //     name: string,
// //     qs: string
// // })

// // const _ = (toogle: boolean) => (toogle ? '' : '--')

// // // prettier-ignore
// // const SELECT: Select = (count, table) => ({ limit }) => {

// //     const build = {
// //         table: {
// //             key: has.value(table) ? '!table' : '',
// //             val: def(table, ''),
// //         },
// //     }
// //     const bind = {
// //         limit: {
// //             key: has.value(limit) ? ':limit' : '',
// //             val: def(cast.string(limit), ''),
// //         },
// //     }

// //     const ONE  = count == 'ONE'
// //     const MANY = count == 'MANY'

// //     let qs = `--sql
// //         SELECT *

// //         FROM td_!table

// //         ${_(ONE)}  LIMIT 1
// //         ${_(MANY)} LIMIT :limit

// //     `

// //     qs = qs.replace(build.table.key, build.table.val)
// //     qs = qs.replace(bind.limit.key, bind.limit.val)

// //     return { name: '', qs }
// // }

// // import { builder } from './query'

// // const { name, qs } = builder
// //   .SELECT('MANY', 'user')
// //   .BY('ID')
// //   .find({ id: 'email123' })
// //   .sort('WEIGHT_RAND', { priority: ['name', 'ASC'], randKey: 12346 })
// //   .stream({ items: 10, page: 5 })

// // console.log('name', name)
// // console.log('qs', qs)

// import { slug } from './query/builder'

// const ws = slug(['en', 'pt', 'fr'], 'user')

// console.log('ws', ws)

// SELECT ALL X
