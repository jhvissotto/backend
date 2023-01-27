import { nav } from '~/src'

export type Route = {
  name: string
  active: boolean
  method: nav.router.Methods
  pattern: string
  mids: nav.router.Handler[] | any[]
  ctrl: nav.router.Handler | any
}
