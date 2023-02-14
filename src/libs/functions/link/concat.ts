import { is } from '~/src/libs/functions/check'

export function L(baseUrl: string, ...params: string[]): string {
  return params.reduce((url, param) => {
    return is.filled(param) ? `/${param}`.concat(url) : url
  }, baseUrl)
}

export function R(baseUrl: string, ...params: string[]): string {
  return params.reduce((url, param) => {
    return is.filled(param) ? url.concat(`/${param}`) : url
  }, baseUrl)
}
