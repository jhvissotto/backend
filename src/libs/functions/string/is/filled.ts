// prettier-ignore

export function filled(input: string) {

  // string
  if (typeof input == "string") {

    // string empty
    if (input === '')
    return false

    // string empty
    if (input === ' ')
    return false

    // sting filled
    return true
    

  // not string
  } else {
    return null;
  }

}
