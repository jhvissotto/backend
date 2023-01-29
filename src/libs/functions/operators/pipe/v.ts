// prettier-ignore
export const v = (val) => (...fns) => fns.reduce((x, f) => f(x), val)
