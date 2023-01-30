import { router } from '..'

export type Route = {
  name: string
  active: boolean
  method: router.Methods
  pattern: string
  mids: router.Handler[] | any[]
  ctrl: router.Handler | any
}
