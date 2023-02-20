import { event } from '~/src/libs/helpers'

type Opts = {
  v0?: ConstructorParameters<typeof event.v0.Emitter>[0]
  v1?: ConstructorParameters<typeof event.v1.Emitter>[0]
  v2?: ConstructorParameters<typeof event.v2.Emitter>[0]
  // v3?: ConstructorParameters<typeof event.v3.Emitter>[0]
  v4?: ConstructorParameters<typeof event.v4.Emitter>[0]
}

export function initialize(opts?: Opts) {
  const v0 = new event.v0.Emitter(opts?.v0)
  const v1 = new event.v1.Emitter(opts?.v1)
  const v2 = new event.v2.Emitter(opts?.v2)
  const v3 = new event.v3.Emitter(/* opts?.v3 */)
  const v4 = new event.v4.Emitter(opts?.v4)

  return {
    v0,
    v1,
    v2,
    v3,
    v4,
  }
}
