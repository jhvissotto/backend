import { jwt } from '~/src/libs/utils'
import { config } from '.'

// prettier-ignore
export function check<Payload>({
    token, 
    secret = config.secret, 
    opts_verify, 
    opts_decode
}: {
    token:        Parameters<typeof jwt.v3.verify>[0], 
    secret?:      Parameters<typeof jwt.v3.verify>[1], 
    opts_verify?: Parameters<typeof jwt.v3.verify>[2], 
    opts_decode?: Parameters<typeof jwt.v3.decode>[1]
}) {


    const { content: content_decoded,  isDecoded                           } = jwt.v3.decode<Payload>(token,         opts_decode)
    const { content: content_verified, isValid, error, hasError, isExpired } = jwt.v3.verify<Payload>(token, secret, opts_verify)



    const content = content_verified || content_decoded

    return { 
        // about_data
        content,  isDecoded,  isValid, 
        // about_fail
        error,    hasError,   isExpired,
    }
}
