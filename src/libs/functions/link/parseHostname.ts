// prettier-ignore
export function parseHostname(hostname: string, domain: string): {
    sub, 
    domain: string, 
    tld
} {

    const [sub, tld] = hostname.split(domain).map(i => i.split('.').filter(Boolean))


    return ({ sub, domain, tld })
}
