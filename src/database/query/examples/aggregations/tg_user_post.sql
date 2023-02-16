-- # required 
-- tj_user_post,


tg_user_post AS (
	SELECT 
		-- agg by
		pk_user            AS ag_user
		-- count
		, COUNT(pk_post)   AS count_posts
		-- sum
		, SUM(count_views) AS total_views
		, SUM(count_likes) AS total_likes
		-- average
		, AVG(count_views) AS avg_views
		, AVG(count_likes) AS avg_likes


	FROM tj_user_post
	
	GROUP BY pk_user
)