import { has } from '~/src/libs/functions/check'

// prettier-ignore
export function valueOrBind(bind: string, value?: string | number) {
  // foo
  return has.value(value) ? value : `:${bind}`
}
