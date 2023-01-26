export const f =
  (val) =>
  (...fns) =>
    fns.reduce((x, f) => f(x), val());
