// prettier-ignore

export function empty(input: string) {

  // string
  if (typeof input == "string") {

    // string empty
    if (input === '')
    return true

    // string empty
    if (input === ' ')
    return true

    // sting filled
    return false
    

  // not string
  } else {
    return null;
  }

}
