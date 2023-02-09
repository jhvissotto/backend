// import { z } from '~/src/libs/helpers/schema'

//
//
// prettier-ignore
export type v4 = {
    // ====================================== //
    // ================ KEYS ================ //
    // ====================================== //
        // ids
        id_bson_field:          string,
        id_ainc_field:          number,
        id_uuid_field:          string,
        id_short_field:         string,

        // keys
        pk_field:               any,
        slug_en_field:          string,
        slug_pt_field:          string,

        // status
        isVisible_field:        boolean,
        launchDate:             Date,
        // code
        codeNumber_field:       number,
        codeText_field:         string,
        // 
        sortNumber_field:       number,


    // ====================================== //
    // ================ USER ================ //
    // ====================================== //
        // login
        email:                   string,
        cellPhone:               number,
        passHash:                string,
        // recovery
        recovery_email:          string,
        recovery_cellPhone:      number,
        recovery_tip:            string,
        recovery_tipHash:        string,
        // status
        isVerified:              boolean,
        isBanned:                boolean,
        isStaff:                 boolean,
        // level
        level_user:              number,
        level_staff:             number,
        // visual
        avatarUrl:               string,
        introUrl:                string,
        // about
        bithDate:                Date  ,
        sex:                     string,
        occupation:              string,
        degree:                  string,
        // physical
        color_eyes:              string,
        color_hair:              string,
        // languages
        speak_en:                number,
        speak_es:                number,
        speak_fr:                number,
        speak_it:                number,
        speak_pt:                number,
        // legal
        nationality:             string,
        govId:                   number,
        taxId:                   number,

        
    // ========================================== //
    // ================ LOCATION ================ //
    // ========================================== //
        phoneNumber:             number,
        address_full:            string,

        // location 1
        address_country:         string,
        address_region:          string,
        address_city:            string,

        // location 2
        address_street:          string,
        address_buildNum:        number,
        address_flatNum:         number,
        address_ref:             string,
        
        // accomodation
        has_wifi:                boolean,
        has_garage:              boolean,
        has_breakfast:           boolean,
        has_lunch:               boolean,
        has_dinner:              boolean,
        has_airCond:             boolean,
        has_pool:                boolean,
        has_hydro:               boolean,


    // ======================================= //
    // ================ NAMES ================ //
    // ======================================= //
        // name
        name_field:              string,
        nameFirst_field:         string,
        nameLast_field:          string,
        // title
        title_en_field:          string,
        title_pt_field:          string,
        // alias
        alias:                   string,
        alias_en_field:          string,
        alias_pt_field:          string,
        // adjective
        adjective:               string,
        adjective_en_field:      string,
        adjective_pt_field:      string,

        
    // ======================================= //
    // ================ TEXTS ================ //
    // ======================================= //
        // description
        descr_en_field:          string,
        descr_pt_field:          string,
        // about
        about_en_field:          string,
        about_pt_field:          string,
        // text
        text_en_field:           string,
        text_pt_field:           string,


    // ======================================== //
    // ================ IFRAME ================ //
    // ======================================== //
        // article
        iframeArticle_en_url:    string,
        iframeArticle_pt_url:    string,


    // ======================================= //
    // ================ LINKS ================ //
    // ======================================= //
        // global
        link_tree:               string,
        link_website:            string,
        link_forum:              string,
        // contact 
        link_whatsapp:           string,
        link_telegram:           string,
        link_email:              string,
        // media
        link_instagram:          string,
        link_youtube:            string,
        link_tiktok:             string,
        link_twitter:            string,
        link_linkedin:           string,
        link_facebook:           string,


    // ========================================= //
    // ================ CONTENT ================ //
    // ========================================= //
        level_post_platform:     number,
        level_post_publisher:    number,
        level_pubsub:            number,


    // ======================================= //
    // ================ MEDIA ================ //
    // ======================================= //
        // main
        imageUrl_field:          string,
        videoUrl_field:          string,
        // min
        thumbImgUrl_field:       string,
        thumbVidUrl_field:       string,


        // landscape main
        imageLandUrl_field:      string,
        videoLandUrl_field:      string,
        // landscape min
        thumbImgLandUrl_field:   string,
        thumbVidLandUrl_field:   string,

        
        // portrait main
        imagePortUrl_field:      string,
        videoPortUrl_field:      string,
        // portrait min
        thumbImgPortUrl_field:   string,
        thumbVidPortUrl_field:   string,


    // ========================================= //
    // ================ NUMBERS ================ //
    // ========================================= //
        // stats
        count_views:            number, 
        count_likes:            number, 


    // ========================================== //
    // ================ BUSINESS ================ //
    // ========================================== //
        IPODate:                Date, 
        businessSector:         string, 
        businessIndustry:       string, 


    // ====================================== //
    // ================ WORK ================ //
    // ====================================== //
        // business
        work_businessHour:      boolean,
        work_businessDay:       boolean,
        
        // by day
        work_weekday:           boolean,
        work_weekend:           boolean,
        work_weekend_full:      boolean,
        work_weekend_part:      boolean,

        // by hour
        hour_start:             number,
        hour_end:               number,

        work_24h:               boolean,

        work_fullTime:          boolean,
        work_partTime:          boolean,
        
        work_day:               boolean,
        work_night:             boolean,


    // ======================================== //
    // ================ CRYPTO ================ //
    // ======================================== //
        wallet_btc:             string,
        wallet_eth:             string,


    // ======================================= //
    // ================ PRICE ================ //
    // ======================================= //
        currency:                string,
        
        // by day
        price_weekday:           number,
        price_weekend:           number,

        // by hour
        price_hour:              number,
        price_period:            number,
        price_extra:             number,
        
        price_fullTime:          number,
        price_partTime:          number,

        price_day:               number,
        price_night:             number,



        // about
        isFree:                  boolean,
        isFreemium:              boolean,
        isPremium:               boolean,



        // common
        price:                   number,
        discountPct:             number,

        // promotion
        promotion_price:         number,
        promotion_discountPct:   number, 

        // extras
        extra_price:             number,
        extra_discountPct:       number,



        // packs price
        basic_price:             number,
        premium_price:           number,
        exclusive_price:         number,

        basic_discountPct:       number,
        premium_discountPct:     number,
        exclusive_discountPct:   number,



        // time price
        price_1h:                number,
        price_2h:                number,
        price_3h:                number,
        price_1d:                number,
        price_2d:                number,
        price_3d:                number,
        price_1w:                number,
        price_2w:                number,
        price_3w:                number,

        // unit price
        price_1u:                number,
        price_2u:                number,
        price_3u:                number,
        price_10u:               number,
        price_20u:               number,
        price_30u:               number,
        price_100u:              number,
        price_200u:              number,
        price_300u:              number,
        price_1000u:             number,
        price_2000u:             number,
        price_3000u:             number,



    // ======================================= //
    // ================ DATES ================ //
    // ======================================= //
        // date
        create_field:            Date,
        update_field:            Date,
        delete_field:            Date,


}
