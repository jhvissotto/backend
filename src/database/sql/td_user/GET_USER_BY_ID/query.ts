import { builder } from '~/src/database/query'
import { model } from '~/src/database'

type Props = {
  pk: builder.Args.PK
}

type Opts = Parameters<typeof builder.queries.GET_ONE_P_BY_ID>[0]

export function query({ pk }: Props, opts?: Opts) {
  return builder.queries.GET_ONE_P_BY_ID({
    name: model.nm.user,
    pk,
    ...opts,
  })
}
