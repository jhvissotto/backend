import { config } from "~/src/global";
import { crypt } from "~/src/libs/utils";

export function genHash(
  password: string | Buffer,
  saltOrRounds?: string | number
) {
  // foo
  const hash = crypt.genHash(password, saltOrRounds || config().salt);
  return { hash };
}
