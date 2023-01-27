import { server } from '~/src'
import { swagger } from '~/src/document'
import { config, env, __directories } from '~/src/global'
import { router } from '~/src/navigation'
import { Express } from '~/src/libs/packs'
import { environment, path } from '~/src/libs/helpers'
import { logger, cors, favicon, parsers, header } from '~/src/libs/extensions/express'

export function initialize() {
  // ======== env ======== //
  environment.initialize()

  // ======== logger ======== //
  const mode = environment.is().dev ? 'dev' : null
  server.express.use(logger.middleware(mode))

  // ======== security ======== //
  server.express.use(cors({ origin: config().allowedOrigins }))
  server.express.use(header.frameguard({ action: 'sameorigin' }))

  // ======== parsers ======== //
  server.express.use(parsers.bearerToken())
  server.express.use(parsers.cookie())
  server.express.use(parsers.universalCookies())
  server.express.use(parsers.body.json())
  server.express.use(Express.json())

  // ======== adjusts ======== //
  server.express.disable('etag')

  // ======== public ======== //
  server.express.use(favicon(path.join(__directories.public, 'favicon.ico')))
  server.express.use('/static', Express.static(__directories.public))

  // ======== swagger ======== //
  server.express.use('/api-docs', swagger.UI())
  server.express.use('/api-docs', swagger.initialize())

  // ======== apollo ======== //
  // apollo.server.start().then(() => {
  //   server.express.use("/graphql", apollo.middleware());
  // });

  // ======== routes ======== //
  router.initialize()
  server.express.use(router.express)

  // ======== listen ======== //
  server.express.listen(env().PORT, () => {
    console.log(`Server listening: http://localhost:${env().PORT}`)
  })
}
