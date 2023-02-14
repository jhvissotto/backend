import { stringifyUrl } from 'query-string'

type Props = Parameters<typeof stringifyUrl>[0]
type Opts = Parameters<typeof stringifyUrl>[1]

// prettier-ignore
export function stringify(
    url:    Props['url'], 
    query?: Props['query'], 
    hash?:  Props['fragmentIdentifier'], 
    opts?:  Opts
) {
    return stringifyUrl({ url, query, fragmentIdentifier: hash }, opts)
}
