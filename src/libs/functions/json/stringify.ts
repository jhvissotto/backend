// prettier-ignore
export function stringify(input, replacer?: Parameters<typeof JSON.stringify>[1]): ({
  input           : typeof input

  outcome         : string  | typeof input 
  error           : null    | Error
  isSuccess       : true    | false 
  isError         : false   | true

  noChange        : boolean

  input_isString  : boolean
  input_isObject  : boolean
  input_isArray   : boolean

  outcome_isString: boolean
  outcome_isObject: boolean
  outcome_isArray : boolean
}) {


  let outcome, error, isSuccess, isError

  try {
    outcome   = JSON.stringify(input, replacer)
    error     = null
    isSuccess = true
    isError   = false
  } catch (e) {
    outcome   = input as typeof input
    error     = e
    isSuccess = false
    isError   = true
  }

  const noChange = outcome === input


  const input_isString    = typeof input == 'string'
  const input_isObject    = typeof input == 'object'
  const input_isArray     = Array.isArray(input)

  const outcome_isString  = typeof outcome == 'string'
  const outcome_isObject  = typeof outcome == 'object'
  const outcome_isArray   = Array.isArray(outcome)


  return { 
    input,

    outcome, 
    error, 
    isSuccess, 
    isError,
    
    noChange,

    input_isString,
    input_isObject,
    input_isArray,
    
    outcome_isString,
    outcome_isObject,
    outcome_isArray, 
  } 
}
