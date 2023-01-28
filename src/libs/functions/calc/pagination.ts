// prettier-ignore
export function pagination(items: number, page: number) {

  const limit = items
  const offset = items * page

  return { limit, offset }
}
