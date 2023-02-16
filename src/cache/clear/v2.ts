import { redis } from '~/src/services'

export async function v2() {
  return await redis.flush('express')
}
