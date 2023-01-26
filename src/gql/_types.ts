import { gql } from "~/src/libs/helpers";

import { home } from "./home";
import { test } from "./test";

export const _types = gql`
  ${home.type}
  ${test.type}
`;
