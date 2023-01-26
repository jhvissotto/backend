// prettier-ignore
export function vs(input: any) {
  
  // boolean
  if (typeof input === "boolean") 
  return input;

  
  // number
  if (typeof input === "number") 
  return 0.5 <= input;

  
  // string
  if (typeof input === "string")
  return ["true", "t", "y", "yes", "1"].includes(input.trim().toLowerCase());
  
  
  // string float
  if (0.5 <= Number(input)) 
  return true;
  
  
  // default
  return false;
}
