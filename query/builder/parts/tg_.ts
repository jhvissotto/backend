import { replacer } from '~/query/builder/_fns'
import { Args } from '~/query/builder/Args'

// prettier-ignore
export function tg_(tableT: Args.Table, tableP: Args.Table) {


    let qs = `--sql
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
            post: tableP,
            tag:  tableT,
        },
    })


    // console.log('qs', qs)
    return qs
}
