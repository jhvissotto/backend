import { database } from "~/src";
import { array } from "~/src/libs/functions";
import { resolvers } from "~/src/libs/helpers";

export async function querySelect({
  table,
  wk = "",
  we = "",
  wv = "",
  limit = 100,
  offset = 0,
  randKey = null
}) {
  // WHERE
  const whereHasAllParams = array.is.fullFilled([wk, we, wv]);
  const where = whereHasAllParams ? `${wk} ${we} ${wv}` : "";

  // ORDER BY
  const orderBy = randKey ? `RAND(${randKey})` : "_id DESC";

  return await resolvers.d<any[]>(
    database.knex
      .select("*")
      .from(table)
      .whereRaw(where)
      .limit(limit)
      .offset(offset)
      .orderByRaw(orderBy)
  );
}
