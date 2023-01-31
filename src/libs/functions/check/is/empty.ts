// prettier-ignore
export function empty(input: any) {
  

  // ======== null ======== //
  if (input === null) 
  return true


  // ======== string ======== //
  if (input === "") 
  return true


  // ======== undefined ======== //
  if (input === undefined) 
  return true


  // ======== undefined ======== //
  if (Array.isArray(input)) {
    if (input?.length == 0) 
    return true
  }

  
  // ======== object ======== //
  if (typeof input === "object") {
    const length = Object.entries(input)?.length
    if (length == 0) 
    return true
  }


  // ======== default ======== //
  return false
}
