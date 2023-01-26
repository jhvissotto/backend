import { jwt } from "~/src/libs/utils";

// prettier-ignore
export function verify<Payload>(...[token, secretOrPublicKey, options]: Parameters<typeof jwt.v2.verify>) {
  //
  // foo 
  //
  const result = jwt.v2.verify(token, secretOrPublicKey, options) as {
    content: jwt.v3.Content<Payload>;
    isValid: ReturnType<typeof jwt.v2.verify>["isValid"];
    error: ReturnType<typeof jwt.v2.verify>["error"];
  };

  return result;
}
