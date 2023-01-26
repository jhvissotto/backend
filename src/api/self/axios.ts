import { create } from "~/src/api/axios";
import { env } from "~/src/global";

export const axios = create({
  baseURL: env().BASE_URL
});
