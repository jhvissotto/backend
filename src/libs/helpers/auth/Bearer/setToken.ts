import { Token } from '.'

export function setToken(token: Token) {
  if (token) {
    return `Bearer ${token}`
  } else {
    console.warn('>> token is missing')
    return null
  }
}
