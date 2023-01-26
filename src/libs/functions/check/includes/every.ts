export function every(a: any, ...b: any[]): boolean {
  return b.every((i) => a.includes(i));
}
