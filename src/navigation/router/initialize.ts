// import * as A from '../routes'
// import * as B from '../'
import * as nav from '~/src/navigation'

// console.log('routes', A.routes)
export function initialize() {
  nav.routes
    .filter(i => i?.active)
    .forEach(i => {
      nav.router.express[i.method](i.pattern, ...[...i.mids, i.ctrl])
    })
}
