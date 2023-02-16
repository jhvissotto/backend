// prettier-ignore
export function empty(input: any) {
  

  // ======== null ======== //
  if (input === null) 
  return true


  // ======== string empty ======== //
  if (input === "") 
  return true
  

  // ======== blank space ======== //
  if (input === " ") 
  return true


  // ======== undefined ======== //
  if (input === undefined) 
  return true


  // ======== array ======== //
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
