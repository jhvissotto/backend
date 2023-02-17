import { sql } from '~/src/database'

const qs = sql.td_user.GET_USER_BY_ID.query({
  pk: 'email1',
})

console.log('qs', qs)
