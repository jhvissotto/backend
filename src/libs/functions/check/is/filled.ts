import { empty as isEmpty } from "./empty";

export function filled(input: any) {
  return !isEmpty(input);
}
