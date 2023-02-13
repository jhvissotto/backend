export function v1(cond, f, x) {
  return cond ? f(x) : x
}

export function v2(cond, f, x) {
  return cond(x) ? f(x) : x
}

// // prettier-ignore
// export const when = <X>(cond: (x: X) => boolean,  f: (x: X) => unknown) => (x: X) => {
//     return cond(x) ? f(x) : x
// }
