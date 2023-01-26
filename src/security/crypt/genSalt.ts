import { crypt } from "~/src/libs/utils";

export function genSalt(...args: Parameters<typeof crypt.genSalt>) {
  const salt = crypt.genSalt(...args);
  return { salt };
}
