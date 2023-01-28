import { routes } from '.'

// prettier-ignore
export function add(...args: Parameters<typeof routes.create>) {

    const newRoute = routes.create(...args)

    routes.list.push(newRoute)
}
