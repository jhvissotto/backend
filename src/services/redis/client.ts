import { env } from "~/src/global";
import { createClient } from "~/src/libs/packs/Redis";

export const client = createClient({
  url: env().REDIS_URL
});
