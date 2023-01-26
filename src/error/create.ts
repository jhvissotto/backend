import { Thrower, dictionary } from ".";

export function create(FLAG: keyof typeof dictionary) {
  const { name, message } = new Thrower(dictionary[FLAG]);
  return { name, message };
}
