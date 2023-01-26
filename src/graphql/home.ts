import { Gql } from "~/src/libs/helpers";

export const home = {
  query: new Gql.ObjectType({
    name: "home",
    fields: {
      welcome: {
        type: Gql.String,
        resolve: () => "Hello world",
      },
    },
  }),
} as Gql.SchemaConfig;
