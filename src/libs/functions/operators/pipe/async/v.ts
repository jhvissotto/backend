export const v =
  async (val) =>
  async (...fns) =>
    await fns.reduce(async (x, f) => await f(x), await val);
