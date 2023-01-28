// import { env } from '~/src/global'
// import { keyv } from '~/src/services'
// import { environment } from '~/src/libs/helpers'
// import { CreateServer, plugins, utils } from '~/src/libs/packs/Apollo'

// import { _schema } from "~/src/graphql";
// import { _types, _resolvers } from "~/src/gql";

export function initialize() {
  // export function initialize(): InstanceType<typeof CreateServer> {
  // return new CreateServer<{ token?: string }>({
  //   // schema: _schema,
  //   // typeDefs: _types,
  //   // resolvers: _resolvers,
  //   // cache: new utils.InMemoryLRUCache({
  //   //   // maxSize: Math.pow(2, 20) * 100, // 100MB
  //   //   // ttl: 300_000, // 5 mins
  //   // }),
  //   cache: env().CACHE_APOLLO_ENABLE
  //     ? new utils.ErrorsAreMissesCache(new utils.KeyvAdapter(keyv.apollo.redis))
  //     : undefined,
  //   plugins: [
  //     // plugins.responseCache({
  //     //   // sessionId: ctx => ctx.request.http.headers.get('session-id') || null,
  //     // }),
  //     environment.is().prod ? plugins.StudioProd() : plugins.StudioDev(),
  //   ],
  // });
}
