import { mids } from '~/src'
import { Token } from '~/src/security'

// prettier-ignore
export const auth = async (req: mids.Req, res: mids.Res, next: mids.Next) => {

  const { token } = req

  const { content, error, isValid, isDecoded } = Token.check(token)


  const {  } = content.payload




  return next()
}
