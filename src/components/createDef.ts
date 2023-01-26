import type { router } from "~/src/navigation";

export function createDef<Params = {}, Query = {}>({
  name,
  active,
  method,
  pattern,
  url,
  user_levelReq,
  staff_levelReq,
  canSanitize,
  canCache
}: {
  name: string;
  active: boolean;
  method: router.Methods;
  pattern: string;
  url: (params: Params, query: Query) => string;
  user_levelReq: number;
  staff_levelReq: number;
  canSanitize: boolean | null;
  canCache: boolean | null;
}) {
  return {
    name,
    active,
    method,
    pattern,
    url,
    user_levelReq,
    staff_levelReq,
    canSanitize,
    canCache
  };
}
