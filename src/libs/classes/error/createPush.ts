// import type { Constructor } from '.'
import { self, create, push } from '.'

// prettier-ignore
export function createPush(_self = self) {
  
  return (FLAG: Parameters<typeof create>[0]) => {
    // foo
    const e = create(FLAG);
    push(_self)(e);
    
    return e;
  }
}
