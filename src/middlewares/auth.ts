// libs
import { z } from '~/src/libs/helpers/schema'
// app
import { mids } from '~/src'
import { Token, crypt, formats } from '~/src/security'

type Payload = z.infer<typeof formats.USER_ACCESS.zSchema>

// prettier-ignore
export type Auth = Payload & {
  token:        ReturnType<typeof Token.check>, 
  level_req:    number,
  level_diff:   number,
  canAccess:    boolean,
}

// prettier-ignore
export const auth = (user_levelReq: number, staff_levelReq: number) => async (req: mids.Req, res: mids.Res, next: mids.Next) => {

  // ======== input ======== //
  const token_assigned = req?.token




  // ======== define variables ======== //
  let auth = {
    token: {
      content:    null,
      isDecoded:  null,
      isValid:    null,
      error:      null,
      hasError:   null,
      isExpired:  null,
    },
    user_id:      null,
    user_isStaff: null,
    user_level:   null,
    level_req:    null,
    level_diff:   null,
    canAccess:    null,
  }

  


  // ======== get values ======== //
  const token_parsed  = Token.check({ token: token_assigned })
  const { payload }   = crypt.decipher<Payload>(token_parsed.content?.payload)




  // ======== calculations ======== //
  const level_req  = payload?.user_isStaff ? staff_levelReq : user_levelReq
  const level_diff = payload?.user_level   - level_req

  const canAccess = (0 >= level_diff)





  // ======== assign values ======== //
  auth = {
    token: {
      content:    token_parsed.content,
      isDecoded:  token_parsed.isDecoded,
      isValid:    token_parsed.isValid,
      error:      token_parsed.error,
      hasError:   token_parsed.hasError,
      isExpired:  token_parsed.isExpired,
    },
    user_id:      payload?.user_id,
    user_isStaff: payload?.user_isStaff,
    user_level:   payload?.user_level,
    level_req:    level_req,
    level_diff:   level_diff,
    canAccess:    canAccess,
  }


  req['middlewares']['auth'] = auth



  return next()
}
