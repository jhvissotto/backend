import { jwt } from '~/src/libs/utils'

// prettier-ignore
export function verify(...[token, secretOrPublicKey, options]: Parameters<typeof jwt.v1.verify>)
  : {
  content:    ReturnType<typeof jwt.v1.verify>
  isValid:    true
  error:      null
  hasError:   false,
  isExpired:  false,
} | {
  content:    null
  isValid:    false
  error:      jwt.v1.Error_General | jwt.v1.Error_NotBefore | jwt.v1.Error_TokenExpired
  hasError:   true,
  isExpired:  boolean
}   {
  //
  // ================ foo body ================ //
  //
  try {
    return ({
      // about_data
      content:    jwt.v1.verify(token, secretOrPublicKey, options),
      isValid:    true,
      // about_fail
      error:      null,
      hasError:   false,
      isExpired:  false,
    })
  } catch (error) {
    console.warn('>> error:', error)
    return ({
      // about_data
      content:    null,
      isValid:    false,
      // about_fail
      error:      error,
      hasError:   true,
      isExpired:  error instanceof jwt.v1.Error_TokenExpired,
    })
  }
}
