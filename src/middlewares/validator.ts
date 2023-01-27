import type { Z } from '~/src/libs/utils/validator'
import { mids } from '~/src'
import { resolvers } from '~/src/libs/helpers'
import { L } from '~/src/libs/utils'

export type Validation = {
  isSanitized: boolean | null
  hasError: boolean | null
  errors: Array<Error | void>
}

// prettier-ignore
export const validator = (schema: Z.AnyZodObject, { canSanitize = false }) => async (req: mids.Req, res: mids.Res, next: mids.Next) => {
  console.log('schema', schema)


  // ======== define variables ======== //
  const validation = {
    isSanitized: null,
    hasError: null,
    errors: []
  } as Validation


  // ======== validation ========= //
  const { data, error, isSuccess, isError } = await resolvers.d(schema.parseAsync({
    params: req.params,
    query: req.query,
    body: req.body,
  }))


  // ======== set errors ======== //
  if (isError) {
    validation.hasError = true
    validation.errors.push(error)
  } else {
    validation.hasError = false
  }


  // ======== conditional sanitize ======== //
  if (canSanitize && isSuccess) {
    validation.isSanitized = true
    L.merge(req, data)
  } else {
    validation.isSanitized = false
  }


  // ======== assign variables ======== //
  L.merge(req, { validation })


  return next()
}
