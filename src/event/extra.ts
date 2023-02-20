import { event } from '~/src/libs/helpers'

export module extra {
  // ============================ //
  // ============ v0 ============ //
  // ============================ //
  export module v0 {
    export const { getListeners, errorMonitor } = event.v0
  }

  // ============================ //
  // ============ v1 ============ //
  // ============================ //
  export module v1 {
    export const { getListeners, errorMonitor } = event.v1
  }

  // ============================ //
  // ============ v2 ============ //
  // ============================ //
  export module v2 {
    export const {} = event.v2
  }

  // ============================ //
  // ============ v3 ============ //
  // ============================ //
  export module v3 {
    export const {} = event.v3
  }

  // ============================ //
  // ============ v4 ============ //
  // ============================ //
  export module v4 {
    export const { listenerAdded, listenerRemoved } = event.v4
  }
}
