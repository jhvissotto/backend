// global
import { __dir } from '~/src/global'
// libs
import { Formidable } from '~/src/libs/packs'
import { calc } from '~/src/libs/functions'

export function initialize(opts?: Parameters<typeof Formidable.create>[0]) {
  // ======================================== //
  // ================ config ================ //
  // ======================================== //
  const instance = Formidable.create({
    // ==== name ==== //
    uploadDir: __dir.upload,
    // filename: (name, ext, part, form) => '',
    keepExtensions: true,

    // ==== filters ==== //
    // filter: ({}) => null,
    allowEmptyFiles: false,

    // ==== one ==== //
    minFileSize: calc.byte(1, 'kb'),
    maxFileSize: calc.byte(10, 'mb'),

    // ==== many ==== //
    multiples: false,
    maxFiles: 20,
    maxTotalFileSize: calc.byte(100, 'mb'),

    // ==== custom ==== //
    // enabledPlugins: ['json', 'querystring', 'multipart', 'octetstream'],
    ...opts,
  })

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

  return { instance }
}
