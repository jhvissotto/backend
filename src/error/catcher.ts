import { is } from '~/src/libs/functions/check'

// prettier-ignore
export function catcher(err: Error | Error[]) {


  // input is not error
  if (!is.error(err) || !is.errors(err))
  return null



  // case error[]
  if (Array.isArray(err)) {
    
    const e = err.map(({ stack, ...rest }) => rest)
    return e
  }
  
  
  
  // case error
  const { name, message } = err;
  return { name, message };

}
