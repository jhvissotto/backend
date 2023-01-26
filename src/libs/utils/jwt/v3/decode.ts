import { jwt } from "~/src/libs/utils";

// prettier-ignore
export function decode<Payload>(...[token, options]: Parameters<typeof jwt.v2.decode>) {
  //
  // foo
  //
  const result = jwt.v2.decode(token, options) as {
    content: jwt.v3.Content<Payload>;
    isDecoded: ReturnType<typeof jwt.v2.decode>["isDecoded"];
  };

  return result;
}
