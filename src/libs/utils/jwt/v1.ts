export type {
  // args
  Secret,
  SignOptions,
  // returns
  Jwt,
  JwtPayload,
} from 'jsonwebtoken'

export {
  // errors
  JsonWebTokenError as Error_General,
  NotBeforeError as Error_NotBefore,
  TokenExpiredError as Error_TokenExpired,
} from 'jsonwebtoken'

export { sign, decode, verify } from 'jsonwebtoken'

import { sign } from 'jsonwebtoken'
export type Signable_Payload = Parameters<typeof sign>[0]
