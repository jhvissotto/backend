import { crypt } from '~/src/libs/utils'

export function hash_match(...args: Parameters<typeof crypt.v1.hash_match>):
  | {
      isValid: boolean
      error: null
    }
  | {
      isValid: null
      error: Error
    } {
  //
  // foo
  //
  try {
    return {
      isValid: crypt.v1.hash_match(...args),
      error: null,
    }
  } catch (error) {
    console.warn('>> error:', error)
    return {
      isValid: null,
      error,
    }
  }
}
