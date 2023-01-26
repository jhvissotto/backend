// prettier-ignore

export function clean(input: string) {

  // string
  if (typeof input == "string") {

    // check
    return input == input?.trim?.();

    
  // not string
  } else {
    return null;
  }

}
