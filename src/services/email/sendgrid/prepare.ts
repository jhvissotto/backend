import { env } from "~/src/global";
import { client } from ".";

export function prepare() {
  client.setApiKey(env().SENDGRID_API_KEY);
}
