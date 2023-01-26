export const when = (cond, f) => (y) => cond(y) ? f(y) : y;
