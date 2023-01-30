// prettier-ignore
export function push<Base, Add>(base: Base, add: Add | Add[]) {

  // checks
  const base_isArray = Array.isArray(base)
  const  add_isArray = Array.isArray(add)



  // ======== base is not array ======== //
  if (!base_isArray) {
    
    // return base without changes
    return base
  }
  


  
  // ======== base is array ======== //

  // add is list
  if (add_isArray) {
    base.push(...add)
    return base
  }
  

  // add is item
  else {
    base.push(add)
    return base
  }

  
}
