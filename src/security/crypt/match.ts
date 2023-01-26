import { crypt } from "~/src/libs/utils";

export function match(...[password, hash]: Parameters<typeof crypt.compare>) {
  const result = crypt.compare(password, hash);
  return result;
}
