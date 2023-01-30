import { crypt } from '~/src/libs/utils'

export function hash_make(...args: Parameters<typeof crypt.v1.hash_make>):
  | {
      hash: string
      error: null
    }
  | {
      hash: null
      error: Error
    } {
  //
  // foo
  //
  try {
    return {
      hash: crypt.v1.hash_make(...args),
      error: null,
    }
  } catch (error) {
    console.warn('>> error:', error)
    return {
      hash: null,
      error,
    }
  }
}
