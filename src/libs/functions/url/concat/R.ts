import { is } from "~/src/libs/functions/check";

export function R(baseUrl: string, ...params: string[]): string {
  return params.reduce((url, param) => {
    return is.filled(param) ? url.concat(`/${param}`) : url;
  }, baseUrl);
}
