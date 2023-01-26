// prettier-ignore
export function parseHostname(hostname: string, domain: string): {
    subdomain, 
    domain: string, 
    tld
} {

    const [subdomain, tld] = hostname.split(domain).map(i => i.split('.').filter(Boolean))


    return ({ subdomain, domain, tld })
}
