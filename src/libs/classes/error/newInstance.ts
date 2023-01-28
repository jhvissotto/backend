import { cloneDeep } from 'lodash'

// import type { Constructor } from '.'
import { constructor, self, createPush, catcherPush } from '.'

export function newIstance() {
  const newSelf = cloneDeep(self)

  const instance = {
    list: newSelf.list,
    createPush: createPush(newSelf),
    catcherPush: catcherPush(newSelf),
  }

  return instance
}
