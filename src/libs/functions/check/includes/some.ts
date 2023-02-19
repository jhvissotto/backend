export function some(a: any, ...b: any[]): boolean {
  return b.some(i => a.includes(i))
}
