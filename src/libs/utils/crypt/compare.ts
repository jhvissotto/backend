import { compareSync as cryptCompare } from "bcrypt";

export function compare(...args: Parameters<typeof cryptCompare>):
  | {
      isValid: boolean;
      error: null;
    }
  | {
      isValid: null;
      error: Error;
    } {
  try {
    return {
      isValid: cryptCompare(...args),
      error: null
    };
  } catch (error) {
    return {
      isValid: null,
      error
    };
  }
}
