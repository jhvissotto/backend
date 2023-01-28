import { array } from '~/src/libs/functions'

// import type { Self } from '.'
import { self } from '.'

// prettier-ignore
export function push(_self = self) {
    return (err: Error | Error[]) => {
  
        array.push(_self.list, err)
      
    }
}
