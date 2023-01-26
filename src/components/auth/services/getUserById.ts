import { knex, model } from "~/src/database";
import { resolvers } from "~/src/libs/helpers";

export async function getUserById({ id_user }) {
  return await resolvers.d<model.TD_user[]>(
    knex
      .select("*")
      .from(model.td.user)
      .where(model.td_user.pk_email, "=", id_user)
    // .limit(1)
  );
}
