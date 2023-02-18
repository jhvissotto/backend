import { jwt } from '~/src/libs/utils'

// prettier-ignore
export function verify<Payload>(...[token, secretOrPublicKey, options]: Parameters<typeof jwt.v2.verify>) {
  //
  // foo 
  //
  const result = jwt.v2.verify(token, secretOrPublicKey, options) as {
    // about_data
    content:    jwt.v3.Content<Payload>
    isValid:    ReturnType<typeof jwt.v2.verify>['isValid']
    // about_fail
    error:      ReturnType<typeof jwt.v2.verify>['error']
    hasError:   ReturnType<typeof jwt.v2.verify>['hasError']
    isExpired:  ReturnType<typeof jwt.v2.verify>['isExpired']
  }

  
  return result
}
