// libs
import { z } from '~/src/libs/helpers/schema'
import { is } from '~/src/libs/functions/number'
// app
import { mids } from '~/src'
import { Token, formats } from '~/src/security'

// prettier-ignore
export const auth = (user_levelReq: number, staff_levelReq: number) => async (req: mids.Req, res: mids.Res, next: mids.Next) => {

  const { token } = req

  type Payload = z.infer<typeof formats.USER_ACCESS.zSchema>
  
  const { content, error, isValid, isDecoded } = Token.check<Payload>(token)

  // const levelDiff = (user_level - user_levelReq)

  // const isPositive = is.positive(levelDiff)



  return next()
}
