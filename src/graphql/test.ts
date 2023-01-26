import { Gql } from "~/src/libs/helpers";

export const test = {
  query: new Gql.ObjectType({
    name: "test",
    fields: {
      success: {
        type: Gql.Boolean,
        resolve: () => true,
      },
    },
  }),
} as Gql.SchemaConfig;
