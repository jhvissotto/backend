// prettier-ignore
export const when = <X>(cond: (x: X) => boolean,  f: (x: X) => unknown) => (x: X) => {

    return cond(x) ? f(x) : x
}

// prettier-ignore
// export const whenAsync = async (cond, f) => async x => (await cond(x)) ? await f(x) : await x
