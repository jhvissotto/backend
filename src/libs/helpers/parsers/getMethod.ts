// prettier-ignore
export function getMethod(req: Request) {

    // ==================== check ==================== //
    const is = {
        GET:    ['get',    'GET'].includes(req.method),
        POST:   ['post',   'POST'].includes(req.method),
        PUT:    ['put',    'PUT'].includes(req.method),
        PATCH:  ['patch',  'PATCH'].includes(req.method),
        DELETE: ['delete', 'DELETE'].includes(req.method),
    }
    

    // ==================== FLAG ==================== //
    let FLAG: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

    is.GET    && (FLAG = 'GET')
    is.POST   && (FLAG = 'POST')
    is.PUT    && (FLAG = 'PUT')
    is.PATCH  && (FLAG = 'PATCH')
    is.DELETE && (FLAG = 'DELETE')



    // ==================== return ==================== //

    const method = { is, FLAG }

    return { method }
}
