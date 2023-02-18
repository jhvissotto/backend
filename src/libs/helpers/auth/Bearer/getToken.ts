import { Token } from '.'

// prettier-ignore
export function getToken(req: Request): {
    hasBearer: boolean,
    hasToken: boolean,
    token: Token
} {

    // initial token
    let token = null


    const Authorization = req.headers?.['Authorization']


    // check if auth is Bearer
    const hasBearer = (typeof Authorization == 'string'  &&  Authorization?.startsWith('Bearer'))


    if (hasBearer) {
        // parse token
        const [Bearer, _token] = Authorization.split(' ')

        token = _token
    }


    // check if has token
    const hasToken = Boolean(typeof token == 'string'  &&  token?.length)


    return {
        hasBearer,
        hasToken,
        token
    }
}
