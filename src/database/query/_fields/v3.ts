import { z } from '~/src/libs/helpers/schema'

//
//
// prettier-ignore
export const v3 = {
    // ====================================== //
    // ================ KEYS ================ //
    // ====================================== //
        // ids
        id_bson_field:          z.string(),
        id_ainc_field:          z.number(),
        id_uuid_field:          z.string(),
        id_short_field:         z.string(),

        // keys
        pk_field:               z.any(),
        slug_en_field:          z.string(),
        slug_pt_field:          z.string(),

        // status
        isVisible_field:        z.boolean(),
        launchDate:             z.date(),
        // code
        codeNumber_field:       z.number(),
        codeText_field:         z.string(),
        // 
        sortNumber_field:       z.number(),


    // ====================================== //
    // ================ USER ================ //
    // ====================================== //
        // login
        email:                   z.string(),
        cellPhone:               z.number(),
        passHash:                z.string(),
        // recovery
        recovery_email:          z.string(),
        recovery_cellPhone:      z.number(),
        recovery_tip:            z.string(),
        recovery_tipHash:        z.string(),
        // status
        isVerified:              z.boolean(),
        isBanned:                z.boolean(),
        isStaff:                 z.boolean(),
        // level
        level_user:              z.number(),
        level_staff:             z.number(),
        // visual
        avatarUrl:               z.string(),
        introUrl:                z.string(),
        // about
        bithDate:                z.date()  ,
        sex:                     z.string(),
        occupation:              z.string(),
        degree:                  z.string(),
        // physical
        color_eyes:              z.string(),
        color_hair:              z.string(),
        // languages
        speak_en:                z.number(),
        speak_es:                z.number(),
        speak_fr:                z.number(),
        speak_it:                z.number(),
        speak_pt:                z.number(),
        // legal
        nationality:             z.string(),
        govId:                   z.number(),
        taxId:                   z.number(),

        
    // ========================================== //
    // ================ LOCATION ================ //
    // ========================================== //
        phoneNumber:             z.number(),
        address_full:            z.string(),

        // location 1
        address_country:         z.string(),
        address_region:          z.string(),
        address_city:            z.string(),

        // location 2
        address_street:          z.string(),
        address_buildNum:        z.number(),
        address_flatNum:         z.number(),
        address_ref:             z.string(),
        
        // accomodation
        has_wifi:                z.boolean(),
        has_garage:              z.boolean(),
        has_breakfast:           z.boolean(),
        has_lunch:               z.boolean(),
        has_dinner:              z.boolean(),
        has_airCond:             z.boolean(),
        has_pool:                z.boolean(),
        has_hydro:               z.boolean(),


    // ======================================= //
    // ================ NAMES ================ //
    // ======================================= //
        // name
        name_field:              z.string(),
        nameFirst_field:         z.string(),
        nameLast_field:          z.string(),
        // title
        title_en_field:          z.string(),
        title_pt_field:          z.string(),
        // alias
        alias:                   z.string(),
        alias_en_field:          z.string(),
        alias_pt_field:          z.string(),
        // adjective
        adjective:               z.string(),
        adjective_en_field:      z.string(),
        adjective_pt_field:      z.string(),


    // ======================================= //
    // ================ TEXTS ================ //
    // ======================================= //
        // description
        descr_en_field:          z.string(),
        descr_pt_field:          z.string(),
        // about
        about_en_field:          z.string(),
        about_pt_field:          z.string(),
        // text
        text_en_field:           z.string(),
        text_pt_field:           z.string(),


    // ======================================== //
    // ================ IFRAME ================ //
    // ======================================== //
        // article
        iframeArticle_en_url:    z.string(),
        iframeArticle_pt_url:    z.string(),


    // ======================================= //
    // ================ LINKS ================ //
    // ======================================= //
        // global
        link_tree:               z.string(),
        link_website:            z.string(),
        link_forum:              z.string(),
        // contact 
        link_whatsapp:           z.string(),
        link_telegram:           z.string(),
        link_email:              z.string(),
        // media
        link_instagram:          z.string(),
        link_youtube:            z.string(),
        link_tiktok:             z.string(),
        link_twitter:            z.string(),
        link_linkedin:           z.string(),
        link_facebook:           z.string(),

        
    // ========================================= //
    // ================ CONTENT ================ //
    // ========================================= //
        level_post_platform:    z.number(),
        level_post_publisher:   z.number(),
        level_pubsub:           z.number(),


    // ======================================= //
    // ================ MEDIA ================ //
    // ======================================= //
        // main
        imageUrl_field:          z.string(),
        videoUrl_field:          z.string(),
        // min
        thumbImgUrl_field:       z.string(),
        thumbVidUrl_field:       z.string(),


        // landscape main
        imageLandUrl_field:      z.string(),
        videoLandUrl_field:      z.string(),
        // landscape min
        thumbImgLandUrl_field:   z.string(),
        thumbVidLandUrl_field:   z.string(),

        
        // portrait main
        imagePortUrl_field:      z.string(),
        videoPortUrl_field:      z.string(),
        // portrait min
        thumbImgPortUrl_field:   z.string(),
        thumbVidPortUrl_field:   z.string(),


        // video resolution
        resolution:              z.number(),
        has1080:                 z.boolean(),
        has720:                  z.boolean(),
        has480:                  z.boolean(),
        

    // ========================================= //
    // ================ NUMBERS ================ //
    // ========================================= //
        // stats
        count_views:            z.number(), 
        count_likes:            z.number(), 


    // ========================================== //
    // ================ BUSINESS ================ //
    // ========================================== //
        IPODate:                z.date(), 
        businessSector:         z.string(), 
        businessIndustry:       z.string(), 


    // ====================================== //
    // ================ WORK ================ //
    // ====================================== //
        // business
        work_businessHour:      z.boolean(),
        work_businessDay:       z.boolean(),
        
        // by day
        work_weekday:           z.boolean(),
        work_weekend:           z.boolean(),
        work_weekend_full:      z.boolean(),
        work_weekend_part:      z.boolean(),

        // by hour
        hour_start:             z.number(),
        hour_end:               z.number(),

        work_24h:               z.boolean(),

        work_fullTime:          z.boolean(),
        work_partTime:          z.boolean(),
        
        work_day:               z.boolean(),
        work_night:             z.boolean(),

        // online
        makeVideoCall:          z.boolean(),


    // ======================================== //
    // ================ CRYPTO ================ //
    // ======================================== //
        wallet_btc:             z.string(),
        wallet_eth:             z.string(),


    // ======================================= //
    // ================ PRICE ================ //
    // ======================================= //
        currency:                z.string(),
        
        // by day
        price_weekday:           z.number(),
        price_weekend:           z.number(),

        // by hour
        price_hour:              z.number(),
        price_period:            z.number(),
        price_extra:             z.number(),
        
        price_fullTime:          z.number(),
        price_partTime:          z.number(),

        price_day:               z.number(),
        price_night:             z.number(),



        // about
        isFree:                  z.boolean(),
        isFreemium:              z.boolean(),
        isPremium:               z.boolean(),



        // common
        price:                   z.number(),
        discountPct:             z.number(),

        // promotion
        promotion_price:         z.number(),
        promotion_discountPct:   z.number(), 

        // extras
        extra_price:             z.number(),
        extra_discountPct:       z.number(),



        // packs price
        basic_price:             z.number(),
        premium_price:           z.number(),
        exclusive_price:         z.number(),

        basic_discountPct:       z.number(),
        premium_discountPct:     z.number(),
        exclusive_discountPct:   z.number(),



        // time price
        price_1h:                z.number(),
        price_2h:                z.number(),
        price_3h:                z.number(),
        price_1d:                z.number(),
        price_2d:                z.number(),
        price_3d:                z.number(),
        price_1w:                z.number(),
        price_2w:                z.number(),
        price_3w:                z.number(),

        // unit price
        price_1u:                z.number(),
        price_2u:                z.number(),
        price_3u:                z.number(),
        price_10u:               z.number(),
        price_20u:               z.number(),
        price_30u:               z.number(),
        price_100u:              z.number(),
        price_200u:              z.number(),
        price_300u:              z.number(),
        price_1000u:             z.number(),
        price_2000u:             z.number(),
        price_3000u:             z.number(),



    // ======================================= //
    // ================ DATES ================ //
    // ======================================= //
        // date
        create_field:            z.date(),
        lastUpd_field:           z.date(),
        update_field:            z.date(),
        delete_field:            z.date(),


}
