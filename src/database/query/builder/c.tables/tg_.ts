import { Args } from '~/src/database/query/builder'
import { __, replacer } from '~/src/database/query/builder/a.fns'
import { ORDER_BY, PARTITION_BY } from '~/src/database/query/builder/b.commands'

// prettier-ignore
export function tg_(tag: Args.Table, post: Args.Table) {


    let qs = `-- sql
        -- # required
        -- tj_tag_post,

        tg_tag_post AS (
            SELECT
                -- agg by
                pk_tag             AS ag_tag
                -- count
                , COUNT(pk_post)   AS count_posts
                -- sum
                , SUM(count_views) AS total_views
                , SUM(count_likes) AS total_likes
                -- average
                , AVG(count_views) AS avg_views
                , AVG(count_likes) AS avg_likes


            FROM tj_tag_post

            GROUP BY pk_tag
        )
    `


    qs = replacer(qs, {
        names: {
            post,
            tag,
        },
    })


    // console.log('qs', qs)
    return qs
}
