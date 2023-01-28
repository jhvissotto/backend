import { env } from '~/src/global'
import { create } from '~/src/api/axios'

export const axios = create({
  baseURL: env().BASE_URL,
})
