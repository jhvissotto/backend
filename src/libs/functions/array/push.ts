// prettier-ignore
export function push<Base, Add>(base: Base, add: Add | Add[]) {



  // ======== base is not array ======== //
  if (!Array.isArray(base)) {
    
    // return base without changes
    return base
  }
  


  
  // ======== base is array ======== //

  // add is list
  if (Array.isArray(add)) {
    base.push(...add);
    return base
  }
  

  // add is item
  else {
    base.push(add)
    return base
  }

  
}
