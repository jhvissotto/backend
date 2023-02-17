--
--
--
--
--
SELECT
    -- ====================== --
    -- ======== KEYS ======== --
    -- ====================== --
        -- ids
        id_bson_field,
        id_ainc_field,
        id_uuid_field,
        id_short_field,

        -- keys
        pk_field,
        slug_en_field,
        slug_pt_field,

        -- status
        isVisible_field,
        launchDate,
        -- code
        codeNumber_field,
        codeText_field,
        -- 
        sortNumber_field,


    -- ====================== --
    -- ======== USER ======== --
    -- ====================== --
        -- login
        email,
        cellPhone,
        passHash,
        -- recovery
        recovery_email,
        recovery_cellPhone,
        recovery_tip,
        recovery_tipHash,
        -- status
        isVerified,
        isBanned,
        isStaff,
        -- level
        level_user,
        level_staff,
        -- visual
        avatarUrl,
        introUrl,
        -- about
        bithDate,
        sex,
        occupation,
        degree,
        -- physical
        color_eyes,
        color_hair,
        -- languages
        speak_en,
        speak_es,
        speak_fr,
        speak_it,
        speak_pt,
        -- legal
        nationality,
        govId,
        taxId,


    -- ========================== --
    -- ======== LOCATION ======== --
    -- ========================== --
        phoneNumber,
        address_full,
 
        -- location 1
        address_country,
        address_region,
        address_city,

        -- location 2
        address_street,
        address_buildNum,
        address_flatNum,
        address_ref,
        
        -- accomodation
        has_wifi,
        has_garage,
        has_breakfast,
        has_lunch,
        has_dinner,
        has_airCond,
        has_pool,
        has_hydro,


    -- ======================= --
    -- ======== NAMES ======== --
    -- ======================= --
        -- name
        name_field,
        nameFirst_field,
        nameLast_field,
        -- title
        title_en_field,
        title_pt_field,
        -- alias
        alias,
        alias_en_field,
        alias_pt_field,
        -- adjective
        adjective,
        adjective_en_field,
        adjective_pt_field,
    

    -- ======================= --
    -- ======== TEXTS ======== --
    -- ======================= --
        -- description
        descr_en_field,
        descr_pt_field,
        -- about
        about_en_field,
        about_pt_field,
        -- text
        text_en_field,
        text_pt_field,


    -- ======================== --
    -- ======== IFRAME ======== --
    -- ======================== --
        -- article
        iframeArticle_en_url,
        iframeArticle_pt_url,


    -- ======================= --
    -- ======== LINKS ======== --
    -- ======================= --
        -- global
        link_tree,
        link_website,
        link_forum,
        -- contact 
        link_whatsapp,
        link_telegram,
        link_email,
        -- media
        link_instagram,
        link_youtube,
        link_tiktok,
        link_twitter,
        link_linkedin,
        link_facebook,


    -- ========================= --
    -- ======== CONTENT ======== --
    -- ========================= --
        level_post_platform,
        level_post_publisher,
        level_pubsub,


    -- ======================= --
    -- ======== MEDIA ======== --
    -- ======================= --
        -- main
        imageUrl_field,
        videoUrl_field,
        -- min
        thumbImgUrl_field,
        thumbVidUrl_field,


        -- landscape main
        imageLandUrl_field,
        videoLandUrl_field,
        -- landscape min
        thumbImgLandUrl_field,
        thumbVidLandUrl_field,


        -- portrait main
        imagePortUrl_field,
        videoPortUrl_field,
        -- portrait min
        thumbImgPortUrl_field,
        thumbVidPortUrl_field,


        -- video resolution
        resolution,
        has1080,
        has720,
        has480,


    -- ========================= --
    -- ======== NUMBERS ======== --
    -- ========================= --
        -- stats
        count_views, 
        count_likes, 


    -- ========================== --
    -- ======== BUSINESS ======== --
    -- ========================== --
        IPODate,
        businessSector,
        businessIndustry,


    -- ====================== --
    -- ======== WORK ======== --
    -- ====================== --
        -- business
        work_businessHour,
        work_businessDay,

        -- by day
        work_weekday,
        work_weekend,
        work_weekend_full,
        work_weekend_part,

        -- by hour
        hour_start,
        hour_end,
 
        work_24h,

        work_fullTime,
        work_partTime,
        
        work_day,
        work_night,

        -- online
        makeVideoCall,


    -- ======================== --
    -- ======== CRYPTO ======== --
    -- ======================== --
        wallet_btc,
        wallet_eth,


    -- ======================= --
    -- ======== PRICE ======== --
    -- ======================= --
        currency,

        -- by day
        price_weekday,
        price_weekend,

        -- by hour
        price_hour,
        price_period,
        price_extra,

        price_fullTime,
        price_partTime,

        price_day,
        price_night,



        -- about
        isFree,
        isFreemium,
        isPremium,



        -- common
        price,
        discountPct,

        -- promotion
        promotion_price,
        promotion_discountPct, 

        -- extras
        extra_price,
        extra_discountPct,



        -- packs price
        basic_price,
        premium_price,
        exclusive_price,

        basic_discountPct,
        premium_discountPct,
        exclusive_discountPct,



        -- time price
        price_1h,
        price_2h,
        price_3h,
        price_1d,
        price_2d,
        price_3d,
        price_1w,
        price_2w,
        price_3w,

        -- unit price
        price_1u,
        price_2u,
        price_3u,
        price_10u,
        price_20u,
        price_30u,
        price_100u,
        price_200u,
        price_300u,
        price_1000u,
        price_2000u,
        price_3000u,


    -- ======================= --
    -- ======== DATES ======== --
    -- ======================= --
        -- date
        create_field,
        lastUpd_field,
        update_field,
        delete_field,


FROM table
