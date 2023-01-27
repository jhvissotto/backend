import { routes, router } from '../'

export function initialize() {
  routes
    .filter(i => i?.active)
    .forEach(i => {
      router.express[i.method](i.pattern, ...[...i.mids, i.ctrl])
    })
}
