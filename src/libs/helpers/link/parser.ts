import { URL, parse } from 'url'
import qs from 'query-string'

export function parser(url) {
  const p1 = new URL(url)
  const p2 = parse(url)
  const p3 = qs.parseUrl(url)

  const protocol = p1.protocol.replace(':', '')
  const query = { ...p3.query }
  const hash = p1.hash.replace('#', '')

  return {
    href: p1.href,
    origin: p1.origin,

    protocol: protocol,

    auth: p2.auth,
    user: p1.username,
    pass: p1.password,

    host: p1.host,
    hostname: p1.hostname,
    port: p1.port,

    // sub,
    // domain,
    // tld,

    path: p2.path,
    pathname: p1.pathname,

    search: p1.search,
    query: query,

    hash: hash,
  }
}
