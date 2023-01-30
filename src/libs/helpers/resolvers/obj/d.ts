import { ArrayElement } from 'type-fest/source/internal'
import { is } from '~/src/libs/functions/check'

export async function d<Data, Fallback = any, E = Error>(
  promise,
  fallback?: Fallback
): Promise<
  | {
      duration: number
      isEmpty: boolean
      isFilled: boolean
      isArray: true
      length: number
      isZero: boolean
      isUnique: boolean
      isMany: boolean
      itemFirst: ArrayElement<Data>
      itemLast: ArrayElement<Data>
      data: Data
      error: null
      isSuccess: true
      isError: false
      status: 'success'
    }
  | {
      duration: number
      isEmpty: boolean
      isFilled: boolean
      isArray: false
      length: null
      isZero: null
      isUnique: null
      isMany: null
      itemFirst: null
      itemLast: null
      data: Data
      error: null
      isSuccess: true
      isError: false
      status: 'success'
    }
  | {
      duration: number
      isEmpty: null
      isFilled: null
      isArray: null
      length: null
      isZero: null
      isUnique: null
      isMany: null
      itemFirst: null
      itemLast: null
      data: typeof fallback | null
      error: E | Error
      isSuccess: false
      isError: true
      status: 'error'
    }
> {
  const start = Date.now()

  return await promise
    .then(({ data }: { data: Data }) => {
      const end = Date.now()
      const duration = (end - start) / 1000

      const isEmpty = is.empty(data)
      const isFilled = is.filled(data)

      const isArray = Array.isArray(data)
      const length = isArray ? data?.length : null
      const isZero = isArray ? length == 0 : null
      const isUnique = isArray ? length == 1 : null
      const isMany = isArray ? length >= 2 : null
      const itemFirst = isArray ? data[0] : null
      const itemLast = isArray ? data[length - 1] : null

      return {
        duration,
        isEmpty,
        isFilled,
        isArray,
        length,
        isZero,
        isUnique,
        isMany,
        itemFirst,
        itemLast,
        data,
        error: null,
        isSuccess: true,
        isError: false,
        status: 'success',
      }
    })
    .catch((error: E | Error) => {
      console.warn('>> error:', error)

      const end = Date.now()
      const duration = (end - start) / 1000

      return {
        duration,
        isEmpty: null,
        isFilled: null,
        isArray: null,
        length: null,
        isZero: null,
        isUnique: null,
        isMany: null,
        itemFirst: null,
        itemLast: null,
        data: fallback ?? null,
        error,
        isSuccess: false,
        isError: true,
        status: 'error',
      }
    })
}
