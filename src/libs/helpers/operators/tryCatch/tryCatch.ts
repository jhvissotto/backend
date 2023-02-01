import { Trinary } from '~/src/common/types'

// prettier-ignore
export function tryCatch<
  Result  = void, 
  Catched = void, 
  Final   = void
>(
  fnTry:    (                                ) => Result,
  fnCatch?: (error?: Error                   ) => Catched,
  fnFinal?: (error?: Error, catched?: Catched) => Final,
) {

  // ======== definitions ======== //
  let result:   Result
  let error:    Error
  let catched:  Catched
  let final:    Final

  let isSuccess = null as Trinary
  let isError   = null as Trinary
  


  
  // ================ try ================ //
  try {
    result    = fnTry()
    isSuccess = true
    isError   = false
    // ================ catch ================ //
  } catch (e) {  
    if (fnCatch)
    catched   = fnCatch?.(e)
    error     = e
    isSuccess = false
    isError   = true
    console.warn('>> error:', e)
  // ================ finally ================ //
  } finally {
    if (fnFinal) 
    final     = fnFinal(error, catched)  
  }


  
  // ======== return ======== //
  return { 
    result, 
    error, 
    catched, 
    final,
    isSuccess,
    isError, 
  }
}
