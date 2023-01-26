import { gql } from "~/src/libs/helpers";

export const home = {
  type: gql`
    type home {
      welcome: String
    }
  `,
  resolver: {
    home: {
      welcome: () => "Hello world",
    },
  },
};
