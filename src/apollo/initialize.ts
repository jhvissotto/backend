// global
import { env, config } from '~/src/global'
// libs
import { environment } from '~/src/libs/helpers'
import { CreateServer, plugins, utils } from '~/src/libs/packs/Apollo'
import { KeyVal } from '~/src/libs/helpers/data'
import { link } from '~/src/libs/helpers'
// app
import { keyval } from '~/src/services'
// local
import type { Context } from '.'

//: InstanceType<typeof CreateServer>
export function initialize() {
  //
  // const KVR = new KeyVal({
  //   namespace: 'apollo',
  //   uri: link.redis.stringify(env().REDIS_BASE_URL, config().redisClientsDb.serverApollo),
  // })

  return new CreateServer<Context>({
    // ======================================= //
    // ================ setup ================ //
    // ======================================= //
    // schema,
    // typeDefs,
    // resolvers,

    // ======================================= //
    // ================ cache ================ //
    // ======================================= //
    // cache: new utils.InMemoryLRUCache({
    //   maxSize: Math.pow(2, 20) * 100, // 100MB
    //   ttl: 300_000, // 5 mins
    // }),
    cache: env().CACHE_APOLLO_ENABLE
      ? new utils.ErrorsAreMissesCache(
          new utils.KeyvAdapter(keyval.apollo.redis /* as typeof KVR */)
        )
      : undefined,

    // ========================================= //
    // ================ plugins ================ //
    // ========================================= //
    plugins: [
      environment.check().isProd ? plugins.StudioProd() : plugins.StudioDev(),
      // plugins.responseCache({
      //   // sessionId: ctx => ctx.request.http.headers.get('session-id') || null,
      // }),
    ],
  })
}
