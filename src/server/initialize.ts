// global
import { config, env, __dir } from '~/src/global'
// libs
import { Express } from '~/src/libs/packs'
import { logger, favicon, parsers, headers } from '~/src/libs/extensions/express'
import { environment, path } from '~/src/libs/helpers'
// app
import { server, E } from '~/src'
import { router } from '~/src/navigation'
import { swagger } from '~/src/document'
// local
// import {  } from '.'

export function initialize() {
  // ======== env ======== //
  environment.initialize()

  // ======== logger ======== //
  const mode = environment.is().dev ? 'dev' : null
  server.express.use(logger.middleware(mode))

  // ======== security ======== //
  server.express.use(headers.cors({ origin: config().allowedOrigins }))
  // server.express.use(headers.set.frameguard({ action: 'sameorigin' }))

  // ======== parsers ======== //
  server.express.use(parsers.bearerToken())
  server.express.use(parsers.cookie())
  server.express.use(parsers.universalCookies())
  server.express.use(parsers.body.json())
  server.express.use(Express.json())

  // ======== adjusts ======== //
  server.express.disable('etag')

  // ======== public ======== //
  server.express.use(favicon(path.join(__dir.public, 'favicon.ico')))
  server.express.use('/public', Express.static(__dir.public))

  // ======== swagger ======== //
  server.express.use('/swagger', swagger.UI())
  server.express.use('/swagger', swagger.initialize())

  // ======== apollo ======== //
  // apollo.server.start().then(() => {
  //   server.express.use("/graphql", apollo.middleware());
  // });

  // ======== routes ======== //
  server.express.use(E.middleware)
  router.initialize()
  server.express.use(router.express)

  // ======== listen ======== //
  server.express.listen(env().PORT, () => {
    console.log(`>> Server listening: http://localhost:${env().PORT}`)
  })
}
