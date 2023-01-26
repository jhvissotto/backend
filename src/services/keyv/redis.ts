import { env } from "~/src/global";
import { Keyv } from "~/src/libs/helpers";

export const redis = new Keyv({
  // namespace: "root",
  uri: env().REDIS_URL,
});
