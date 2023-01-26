import { apollo } from "~/src";
import { createMiddleware } from "~/src/libs/packs/apollo";

export function middleware() {
  return createMiddleware(apollo.server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  });
}
