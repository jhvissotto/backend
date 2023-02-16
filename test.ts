import { priority } from '~/src/database/query/builder/a.fns'
// import { providers } from './src'

// async function fn() {}

// retry.v1.wrap(fn, {})
// retry.v2(fn, {})
// retry.v3(fn, {})
// retry.v4(fn, {})

// const c = new AbortController()
// c.abort()

// const { data, error, isError } = await providers.test.getPostById.api({
//   params: { id_post: 123 },
// })

const x = priority.v1([' ', 'aaa', 'xxx'])
console.log('x', x)
