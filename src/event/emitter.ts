import { instance } from '.'

export module emitter {
  // ============================ //
  // ============ v0 ============ //
  // ============================ //
  export module v0 {
    export const { emit } = instance.v0
  }

  // ============================ //
  // ============ v1 ============ //
  // ============================ //
  export module v1 {
    export const { emit } = instance.v1
  }

  // ============================ //
  // ============ v2 ============ //
  // ============================ //
  export module v2 {
    export const { emit, emitAsync } = instance.v2
  }

  // ============================ //
  // ============ v3 ============ //
  // ============================ //
  export module v3 {
    export const { emit } = instance.v3
  }

  // ============================ //
  // ============ v4 ============ //
  // ============================ //
  export module v4 {
    export const { emit, emitSerial } = instance.v4
  }
}
