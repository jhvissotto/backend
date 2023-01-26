// prettier-ignore
export function v(input: any) {
  
  // boolean
  if (typeof input == "boolean") 
  return !input;


  // number
  if (typeof input == "number") 
  return input < 0.5;


  // // string
  // if (typeof input == "string")
  // return ["false", "f", "n", "no", "0"].includes(input.trim().toLowerCase());

  
  // string float
  if (Number(input) < 0.5) 
  return true;


  // default
  return false;
}
