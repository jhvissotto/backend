import type { JwtPayload as Content_Extra } from '~/src/libs/utils/jwt/v1'

export type Content<Payload> = { payload?: Payload } & Content_Extra
