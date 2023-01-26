import { gql } from "~/src/libs/helpers";

export const test = {
  type: gql`
    type test {
      success: Boolean
    }
  `,
  resolver: {
    test: {
      success: () => true,
    },
  },
};
