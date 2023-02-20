// prettier-ignore
export function baseUrl({ protocol, sub, domain, tld, port }) {
    
    const hostname  = [sub, domain, tld].filter(Boolean).join('.')
    const host      = [hostname, port].filter(Boolean).join(':')
    const origin    = [protocol, `//${host}`].filter(Boolean).join(':')

    return ({ origin, host, hostname })
}
