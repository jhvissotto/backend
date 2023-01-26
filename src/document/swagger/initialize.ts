import { config } from "~/src/global";
import { Swagger } from "~/src/libs/packs";
import { instance } from ".";

export function initialize() {
  return instance.setup(
    Swagger.documentCombiner({
      // failOnErrors: true,
      definition: {
        openapi: "3.0.0",
        info: {
          title: config().appName,
          version: "1.0.0"
        }
      },
      apis: ["../../../src/components*.ts"]
    }),
    {
      customSiteTitle: config().appName,
      explorer: true
    }
  );
}
