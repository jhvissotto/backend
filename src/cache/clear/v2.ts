import { redis } from "~/src/services";

export async function v2(args?: Parameters<typeof redis.flush>[0]) {
  return await redis.flush({ ...args });
}
