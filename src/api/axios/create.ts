import { axios } from "~/src/libs/packs";

export function create(options: Parameters<typeof axios.create>[0]) {
  return axios.create({
    ...options
  });
}

// client.interceptors.request.use((config) => {
//   config.headers["Authorization"] = `Bearer ${123456}`;
//   return config;
// });
