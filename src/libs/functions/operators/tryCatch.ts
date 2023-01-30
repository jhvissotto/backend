// prettier-ignore
export function tryCatch<
  Result = void, 
  Catched = void, 
  Final = void
>(
  fnTry: () => Result,
  fnCatch?: (error?: Error) => Catched,
  fnFinal?: (error?: Error, catched?: Catched) => Final,
) {


  let result: Result
  let error: Error
  let catched: Catched
  let final: Final


  try {
    result = fnTry()

  } catch (e) {
    console.warn('>> error:', e)
    error = e
    if (fnCatch) catched = fnCatch(error)

  } finally {
    if (fnFinal) final = fnFinal(error, catched)  

  }


  return { result, error, catched, final }
}
