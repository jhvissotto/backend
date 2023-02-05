export function run<Result>(input: () => Result) {
  return input?.()
}
