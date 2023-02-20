const url = 'https://user:pass@www.site.com.en:80/slug?abc=123#tag'

const parsed = {
  origin: 'https://www.site.com.en:80',

  protocol: 'https',

  auth: 'user:pass',
  user: 'user',
  pass: 'pass',

  host: 'www.site.com.en:80',
  hostname: 'www.site.com.en',
  port: '80',

  // sub: 'www',
  // domain: 'site.com',
  // tld: 'en',

  path: '/slug?abc=123',
  pathname: '/slug',

  search: '?abc=123',
  query: { abc: '123' },

  hash: 'tag',
}
