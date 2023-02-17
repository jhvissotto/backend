import { ctrl } from '~/src'
import { schema } from '.'

// prettier-ignore
export async function _ctrl(
  req: ctrl.Req<schema.Req['params'], schema.Req['query'], schema.Req['body']>,
  res: ctrl.Res<schema.Res>
) {
  const { params, query, body } = req
  const {} = req.params
  const {} = req.query
  const {} = req.body

  const { validation } = req
  const { locals } = res


  return res.json({
    ip:           req.ip,
    ips:          req.ips,
    
    headers:      req.headers,
    cookies:      req.cookies,
    token:        req?.token,

    method:       req.method,
    protocol:     req.protocol,
    secure:       req.secure,
    httpVersion:  req.httpVersion,

    subdomains:   req.subdomains,
    hostname:     req.hostname,
    
    baseUrl:      req.baseUrl,
    path:         req.path,
    url:          req.url,
    originalUrl:  req.originalUrl,

    params:       req.params,
    query:        req.query,
    body:         req.body,
  })
}
