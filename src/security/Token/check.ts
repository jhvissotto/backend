import { jwt } from '~/src/libs/utils'
import { env } from '~/src/global'

// prettier-ignore
export function check<Payload>(
    token:       Parameters<typeof jwt.v3.verify>[0], 
    secret?:     Parameters<typeof jwt.v3.verify>[1], 
    verifyOpts?: Parameters<typeof jwt.v3.verify>[2], 
    decodeOpts?: Parameters<typeof jwt.v3.decode>[1]
) {


    const { content: content_decoded, isDecoded } = jwt.v3.decode<Payload>(token, decodeOpts)
    
    const { content: content_verified, error, isValid } = jwt.v3.verify<Payload>(
        token, 
        secret || env().APP_KEY_PRIVATE, 
        verifyOpts
    )
    


    const content = content_verified || content_decoded
    
    return { content, error, isValid, isDecoded }
}
