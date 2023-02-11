-- tj_tag_post_user,

tg_tag_post_user AS (
	SELECT 
		-- agg by
		pk_tag             AS ag_tag
		-- count
		, COUNT(pk_post)   AS count_posts
		, COUNT(pk_user)   AS count_users
		-- sum
		, SUM(count_views) AS total_views
		, SUM(count_likes) AS total_likes
		-- average
		, AVG(count_views) AS avg_views
		, AVG(count_likes) AS avg_likes


	FROM tj_tag_post_user

	GROUP BY pk_tag
)