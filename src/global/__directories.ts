import { path } from "~/src/libs/helpers";

export const __directories = {
  root: process.cwd(),
  public: path.join(__dirname, "../public"),
  uploads: path.join(__dirname, "../public/uploads")
};
