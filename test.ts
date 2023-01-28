import z from 'zod'

try {
  const S = z.enum(['111', '222'])

  const val = '333'

  const r = S.parse(val)

  console.log('r', r)
} catch (error) {
  console.log('error', error)
}
