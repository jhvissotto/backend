import { is } from '~/src/libs/functions/check'

// import type { Self } from '.'
import { self, catcher, push } from '.'

// prettier-ignore
export function catcherPush(_self = self) {
  return (err: Error | Error[]) => {

    // input is not error
    if (!is.error(err) || !is.errors(err))
    return null
  
  
    // foo
    const e = catcher(err);
    push(_self)(e) 
    
    return e;
  }
  
}
