import { ArrayElement } from 'type-fest/source/internal'
import { array } from '~/src/libs/functions'
// import { is } from '~/src/libs/functions/check'

// prettier-ignore
export async function d<Data, E = Error>(promise): Promise<
  {
    // resolver
    duration:     number
    data:         Data
    error:        null
    isSuccess:    true
    isError:      false
    status:       'success'
    // extra
      isEmpty:    boolean
      isFilled:   boolean
      isArray:    true
      length:     number
      isZero:     boolean
      isUnique:   boolean
      isMany:     boolean
      itemFirst:  ArrayElement<Data>
      itemLast:   ArrayElement<Data>
  } | {
    // resolver
    duration:     number
    data:         Data
    error:        null
    isSuccess:    true
    isError:      false
    status:       'success'
    // extra
      isEmpty:    boolean
      isFilled:   boolean
      isArray:    false
      length:     null
      isZero:     null
      isUnique:   null
      isMany:     null
      itemFirst:  null
      itemLast:   null
  } | {
    // resolver
    duration:     number
    data:         null 
    error:        E | Error
    isSuccess:    false
    isError:      true
    status:       'error'
    // extra
      isEmpty:    null
      isFilled:   null
      isArray:    null
      length:     null
      isZero:     null
      isUnique:   null
      isMany:     null
      itemFirst:  null
      itemLast:   null
  }
> {
  const start = Date.now()

  return await promise
    // ======================== THEN ======================== //
    .then((data: Data) => {
      const end = Date.now()
      const duration = (end - start) / 1000

      const {
        isEmpty,    isFilled,
        isArray,    length,
        isZero,     isUnique,   isMany,
        itemFirst,  itemLast,
      } = array.parse<Data>(data as Data[])

      return {
        // resolver
        duration,
        data,
        error:      null,
        isSuccess:  true,
        isError:    false,
        status:     'success',
        // extra
          isEmpty,
          isFilled,
          isArray,
          length,
          isZero,
          isUnique,
          isMany,
          itemFirst,
          itemLast,
      }
    })
    // ======================== CATCH ======================== //
    .catch((error: E | Error) => {
      console.warn('>> error:', error)

      const end = Date.now()
      const duration = (end - start) / 1000

      return {
        // resolver
        duration,
        data:       null, 
        error,
        isSuccess:  false,
        isError:    true,
        status:     'error',
        // extra
          isEmpty:    null,
          isFilled:   null,
          isArray:    null,
          length:     null,
          isZero:     null,
          isUnique:   null,
          isMany:     null,
          itemFirst:  null,
          itemLast:   null,
      }
    })
}
