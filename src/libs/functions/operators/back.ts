// prettier-ignore
export function back(input) {

  // case function  
  if (typeof input == 'function') 
  return input()

  // default
  return input
}
