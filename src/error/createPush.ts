import { create, push } from ".";

// prettier-ignore
export function createPush(FLAG: Parameters<typeof create>[0]) {
  // foo
  const e = create(FLAG);
  push(e);

  return e;
}
