import { Formidable } from "~/src/libs/packs";
import { byte } from "~/src/libs/functions";
import { __directories } from "~/src/global";

export function initialize(opts?: Parameters<typeof Formidable.create>[0]) {
  // ======================================== //
  // ================ config ================ //
  // ======================================== //
  const instance = Formidable.create({
    // ==== name ==== //
    uploadDir: __directories.uploads,
    // filename: (name, ext, part, form) => '',
    keepExtensions: true,

    // ==== filters ==== //
    // filter: ({}) => null,
    allowEmptyFiles: false,

    // ==== one ==== //
    minFileSize: byte.calc(1, "kb"),
    maxFileSize: byte.calc(10, "mb"),

    // ==== many ==== //
    multiples: false,
    maxFiles: 20,
    maxTotalFileSize: byte.calc(100, "mb"),

    // ==== custom ==== //
    // enabledPlugins: ["json", "querystring", "multipart", "octetstream"],
    ...opts
  });

  // ========================================= //
  // ================ plugins ================ //
  // ========================================= //
  // uploader.use((self, opts) => {});

  // ======================================== //
  // ================ events ================ //
  // ======================================== //
  // uploader.once("", () => {
  //   uploader.emit("", {});
  // });

  // uploader.on("", () => {
  //   uploader.emit("", {});
  // });

  return { instance };
}
