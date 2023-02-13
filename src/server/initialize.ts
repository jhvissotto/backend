// global
import { config, env, __dir } from '~/src/global'
// libs
import { Express, EJS } from '~/src/libs/packs'
import { logger, favicon, parsers, headers } from '~/src/libs/extensions/express'
import { environment } from '~/src/libs/helpers'
// app
import { __public, server, E, view } from '~/src'
import { router } from '~/src/navigation'
import { swagger } from '~/src/document'
// local
// import {} from '.'

// prettier-ignore
export function initialize() {
  // ======== env ======== //
  // environment.initialize()

  
  // ======== logger ======== //
  const mode = environment.is().dev ? 'dev' : null
  server.express.use(logger.middleware(mode))


  // ======== security ======== //
  server.express.use(headers.cors({ 
    origin: config().allowedOrigins,
    preflightContinue: true 
  }))
  // server.express.use(headers.set.frameguard({ action: 'sameorigin' }))


  // ======== parsers ======== //
  server.express.use(parsers.bearerToken())
  server.express.use(parsers.cookie())
  server.express.use(parsers.universalCookies())
  server.express.use(Express.urlencoded({ extended: true }))
  server.express.use(Express.json())


  // ======== adjusts ======== //
  server.express.disable('etag')


  // ======== public ======== //
  server.express.use(favicon(__public.favicon))
  server.express.use('/public', Express.static(__public.dirname))

  
  // ======== swagger ======== //
  server.express.use('/swagger', swagger.UI())
  server.express.use('/swagger', swagger.initialize())


  // ======== apollo ======== //
  // apollo.server.start().then(() => {
  //   server.express.use("/graphql", apollo.middleware());
  // });


  // ======== view ======== //
  server.express.set('views', __dir.view)
  server.express.set('view engine', 'html')
  server.express.engine('html', EJS.renderFile)
  
  
  // ======== html ======== //
  server.express.use('/homepage', (req, res) => {
    return res.render(view.html.blank, {
      document: view.documents.document1,
      layout:   view.layouts.layout1, 
      page:     view.pages.page1, 
      // props
      props: { 
        welcome: 'Hello World', 
      },
    })

  })
  

  // ======== routes ======== //
  server.express.use(E.middleware)
  router.initialize()
  server.express.use(router.express)


  // ======== listen ======== //
  server.express.listen(env().PORT, () => {
    console.log(`>> Server listening: http://localhost:${env().PORT}`)
  })
}
