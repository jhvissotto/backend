import { instance } from '.'

export module listener {
  // ==================================== //
  // ================ v0 ================ //
  // ==================================== //
  export module v0 {
    export const {
      on,
      once,
      off,

      listeners,
      listenerCount: count,

      getMaxListeners: getMax,
      setMaxListeners: setMax,

      prependListener: prepende,
      prependOnceListener: prependOnce,

      rawListeners: raw,
      addListener: add,

      removeListener: remove,
      removeAllListeners: removeAll,
    } = instance.v0
  }

  // ==================================== //
  // ================ v1 ================ //
  // ==================================== //
  export module v1 {
    export const {
      on,
      once,
      off,

      listeners,
      listenerCount: count,

      getMaxListeners: getMax,
      setMaxListeners: setMax,

      prependListener: prepende,
      prependOnceListener: prependOnce,

      rawListeners: raw,
      addListener: add,

      removeListener: remove,
      removeAllListeners: removeAll,
    } = instance.v1
  }

  // ==================================== //
  // ================ v2 ================ //
  // ==================================== //
  export module v2 {
    export const {
      on,
      once,
      onAny,
      many,
      off,
      offAny,

      listeners,
      listenersAny,
      listenerCount: count,

      getMaxListeners: getMax,
      setMaxListeners: setMax,

      hasListeners: has,
      addListener: add,

      prependListener: prepend,
      prependOnceListener: prependOnce,
      prependMany,
      prependAny,

      listenTo: start,
      stopListeningTo: stop,

      removeListener: remove,
      removeAllListeners: removeAll,

      waitFor,
    } = instance.v2
  }

  // ==================================== //
  // ================ v3 ================ //
  // ==================================== //
  export module v3 {
    export const {
      on,
      once,
      off,

      listeners,
      listenerCount: count,
      addListener: add,

      removeListener: remove,
      removeAllListeners: removeAll,
    } = instance.v3
  }

  // ==================================== //
  // ================ v4 ================ //
  // ==================================== //
  export module v4 {
    export const {
      on,
      once,
      onAny,
      off,
      offAny,

      anyEvent: any,
      listenerCount: count,
      bindMethods,

      clearListeners: clear,
    } = instance.v4
  }
}
