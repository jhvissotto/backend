// ----------------------------
// Collection structure for collection
// ----------------------------
db.getCollection('collection').drop()
db.createCollection('collection')

// ----------------------------
// Documents of collection
// ----------------------------
// prettier-ignore
db.getCollection('collection').insert([{
    // ====================================== //
    // ================ KEYS ================ //
    // ====================================== //
        // _id:                    ObjectId('63e3b85d4a23000053002932'),
        
        // // ids
        // id_bson_field:          ObjectId('63e3b85d4a23000053002932'),
        // id_ainc_field:          0,
        // id_uuid_field:          UUID('123e4567-e89b-12d3-a456-426614174000'),
        // id_short_field:         'ABC123',

        // // keys
        // pk_field:               '',
        // slug_en_field:          '',
        // slug_pt_field:          '',

        // // status
        // isVisible_field:        false,
        // launchDate:             Date,
        // // numeric
        // codeNumber_field:       0,
        // codeText_field:         '',
        // // 
        // sortNumber_field:       0,


    // ====================================== //
    // ================ USER ================ //
    // ====================================== //
        // // login
        // email:                   '',
        // cellPhone:               0,
        // passHash:                '',
        // // recovery
        // recovery_email:          '',
        // recovery_cellPhone:      0,
        // recovery_tip:            '',
        // recovery_tipHash:        '',
        // // status
        // isVerified:              false,
        // isBanned:                false,
        // isStaff:                 false,
        // // level
        // level_user:              0,
        // level_staff:             0,
        // // visual
        // avatarUrl:               '',
        // introUrl:                '',
        // // about
        // bithDate:                Date,
        // sex:                     '',
        // occupation:              '',
        // degree:                  '',
        // // physical
        // color_eyes:              '',
        // color_hair:              '',
        // // languages
        // speak_en:                0,
        // speak_es:                0,
        // speak_fr:                0,
        // speak_it:                0,
        // speak_pt:                0,
        // // legal
        // nationality:             '',
        // govId:                   0,
        // taxId:                   0,

        
    // ========================================== //
    // ================ LOCATION ================ //
    // ========================================== //
        // phoneNumber:             0,
        // address_full:            '',

        // // location 1
        // address_country:         '',
        // address_region:          '',
        // address_city:            '',

        // // location 2
        // address_street:          '',
        // address_buildNum:        0,
        // address_flatNum:         0,
        // address_ref:             '',
        
        // // accomodation
        // has_wifi:                false,
        // has_garage:              false,
        // has_breakfast:           false,
        // has_lunch:               false,
        // has_dinner:              false,
        // has_airCond:             false,
        // has_pool:                false,
        // has_hydro:               false,


    // ======================================= //
    // ================ NAMES ================ //
    // ======================================= //
        // // name
        // name_field:              '',
        // nameFirst_field:         '',
        // nameLast_field:          '',
        // // title
        // title_en_field:          '',
        // title_pt_field:          '',
        // // alias
        // alias_field:             '',
        // alias_en_field:          '',
        // alias_pt_field:          '',
        // // adjective
        // adjective_field:         '',
        // adjective_en_field:      '',
        // adjective_pt_field:      '',
    

    // ======================================= //
    // ================ TEXTS ================ //
    // ======================================= //
        // // description
        // descr_en_field:          '',
        // descr_pt_field:          '',
        // // about
        // about_en_field:          '',
        // about_pt_field:          '',
        // // text
        // text_en_field:           '',
        // text_pt_field:           '',


    // ======================================== //
    // ================ IFRAME ================ //
    // ======================================== //
        // // article
        // iframeArticle_en_url:    '',
        // iframeArticle_pt_url:    '',


    // ======================================= //
    // ================ LINKS ================ //
    // ======================================= //
        // // global
        // link_tree:               '',
        // link_website:            '',
        // link_forum:              '',
        // // contact 
        // link_whatsapp:           '',
        // link_telegram:           '',
        // link_email:              '',
        // // media
        // link_instagram:          '',
        // link_youtube:            '',
        // link_tiktok:             '',
        // link_twitter:            '',
        // link_linkedin:           '',
        // link_facebook:           '',


    // ========================================= //
    // ================ CONTENT ================ //
    // ========================================= //
        // level_post_platform:     0,
        // level_post_publisher:    0,
        // level_pubsub:            0,


    // ======================================= //
    // ================ MEDIA ================ //
    // ======================================= //
        // // main
        // imageUrl_field:          '',
        // videoUrl_field:          '',
        // // min
        // thumbImgUrl_field:       '',
        // thumbVidUrl_field:       '',


        // // landscape main
        // imageLandUrl_field:      '',
        // videoLandUrl_field:      '',
        // // landscape min
        // thumbImgLandUrl_field:   '',
        // thumbVidLandUrl_field:   '',

        
        // // portrait main
        // imagePortUrl_field:      '',
        // videoPortUrl_field:      '',
        // // portrait min
        // thumbImgPortUrl_field:   '',
        // thumbVidPortUrl_field:   '',


    // ========================================= //
    // ================ NUMBERS ================ //
    // ========================================= //
        // // stats
        // count_views:            0, 
        // count_likes:            0, 


    // ========================================== //
    // ================ BUSINESS ================ //
    // ========================================== //
        // IPODate:                Date,
        // businessSector:         '',    
        // businessIndustry:       '',    


    // ====================================== //
    // ================ WORK ================ //
    // ====================================== //
        // // business
        // work_businessHour:      false,
        // work_businessDay:       false,
        
        // // by day
        // work_weekday:           false,
        // work_weekend:           false,
        // work_weekend_full:      false,
        // work_weekend_part:      false,

        // // by hour
        // hour_start:             0.0,
        // hour_end:               0.0,

        // work_24h:               false,

        // work_fullTime:          false,
        // work_partTime:          false,
        
        // work_day:               false,
        // work_night:             false,


    // ======================================== //
    // ================ CRYPTO ================ //
    // ======================================== //
        // wallet_btc:             '',
        // wallet_eth:             '',
    

    // ======================================= //
    // ================ PRICE ================ //
    // ======================================= //
        // currency:               '',

        // // by day
        // price_weekday:           0.0,
        // price_weekend:           0.0,

        // // by hour
        // price_hour:              0.0,
        // price_period:            0.0,
        // price_extra:             0.0,
        
        // price_fullTime:          0.0,
        // price_partTime:          0.0,

        // price_day:               0.0,
        // price_night:             0.0,



        // // about
        // isFree:                  false,
        // isFreemium:              false,
        // isPremium:               false,



        // // common
        // price:                   0.0,
        // discountPct:             0.0,

        // // promotion
        // promotion_price:         0.0,
        // promotion_discountPct:   0.0, 

        // // extras
        // extra_price:             0.0,
        // extra_discountPct:       0.0,



        // // packs price
        // basic_price:             0.0,
        // premium_price:           0.0,
        // exclusive_price:         0.0,

        // basic_discountPct:       0.0,
        // premium_discountPct:     0.0,
        // exclusive_discountPct:   0.0,



        // // time price
        // price_1h:                0.0,
        // price_2h:                0.0,
        // price_3h:                0.0,
        // price_1d:                0.0,
        // price_2d:                0.0,
        // price_3d:                0.0,
        // price_1w:                0.0,
        // price_2w:                0.0,
        // price_3w:                0.0,

        // // unit price
        // price_1u:                0.0,
        // price_2u:                0.0,
        // price_3u:                0.0,
        // price_10u:               0.0,
        // price_20u:               0.0,
        // price_30u:               0.0,
        // price_100u:              0.0,
        // price_200u:              0.0,
        // price_300u:              0.0,
        // price_1000u:             0.0,
        // price_2000u:             0.0,
        // price_3000u:             0.0,



    // ======================================= //
    // ================ DATES ================ //
    // ======================================= //
        // // date
        // create_field:            Date,
        // update_field:            Date,
        // delete_field:            Date,


}])
