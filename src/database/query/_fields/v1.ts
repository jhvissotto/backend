//
//
// prettier-ignore
export function v1(field: string) {

    return {
        // ====================================== //
        // ================ KEYS ================ //
        // ====================================== //
            // ids
            id_bson_field:          `id_bson_${field}`,
            id_ainc_field:          `id_ainc_${field}`,
            id_uuid_field:          `id_uuid_${field}`,
            id_short_field:         `id_short_${field}`,

            // keys
            pk_field:               `pk_${field}`,
            slug_en_field:          `slug_en_${field}`,
            slug_pt_field:          `slug_pt_${field}`,

            // status
            isVisible_field:        `isVisible_${field}`,
            launchDate:             `launchDate`,
            // code
            codeNumber_field:       `codeNumber_${field}`,
            codeText_field:         `codeText_${field}`,
            // 
            sortNumber_field:       `sortNumber_${field}`,


        // ====================================== //
        // ================ USER ================ //
        // ====================================== //
            // login
            email:                  `email`,
            cellPhone:              `cellPhone`,
            passHash:               `passHash`,
            // recovery
            recovery_email:         `recovery_email`,
            recovery_cellPhone:     `recovery_cellPhone`,
            recovery_tip:           `recovery_tip`,
            recovery_tipHash:       `recovery_tipHash`,
            // status
            isVerified:             `isVerified`,
            isBanned:               `isBanned`,
            isStaff:                `isStaff`,
            // level
            level_user:             `level_user`,
            level_staff:            `level_staff`,
            // visual
            avatarUrl:              `avatarUrl`,
            introUrl:               `introUrl`,
            // about
            bithDate:               `bithDate`,
            sex:                    `sex`,
            occupation:             `occupation`,
            degree:                 `degree`,
            // physical
            color_eyes:             `color_eyes`,
            color_hair:             `color_hair`,
            // languages
            speak_en:               `speak_en`,
            speak_es:               `speak_es`,
            speak_fr:               `speak_fr`,
            speak_it:               `speak_it`,
            speak_pt:               `speak_pt`,
            // legal
            nationality:            `nationality`,
            govId:                  `govId`,
            taxId:                  `taxId`,


        // ========================================== //
        // ================ LOCATION ================ //
        // ========================================== //
            phoneNumber:            `phoneNumber`,
            address_full:           `address_full`,
    
            // location 1
            address_country:        `address_country`,
            address_region:         `address_region`,
            address_city:           `address_city`,

            // location 2
            address_street:         `address_street`,
            address_buildNum:       `address_buildNum`,
            address_flatNum:        `address_flatNum`,
            address_ref:            `address_ref`,
            
            // accomodation
            has_wifi:               `has_wifi`,
            has_garage:             `has_garage`,
            has_breakfast:          `has_breakfast`,
            has_lunch:              `has_lunch`,
            has_dinner:             `has_dinner`,
            has_airCond:            `has_airCond`,
            has_pool:               `has_pool`,
            has_hydro:              `has_hydro`,


        // ======================================= //
        // ================ NAMES ================ //
        // ======================================= //
            // name
            name_field:             `name_${field}`,
            nameFirst_field:        `nameFirst_${field}`,
            nameLast_field:         `nameLast_${field}`,
            // title
            title_en_field:         `title_en_${field}`,
            title_pt_field:         `title_pt_${field}`,
            // alias
            alias:                  `alias`,
            alias_en_field:         `alias_en_field`,
            alias_pt_field:         `alias_pt_field`,
            // adjective
            adjective:              `adjective`,
            adjective_en_field:     `adjective_en_field`,
            adjective_pt_field:     `adjective_pt_field`,
        

        // ======================================= //
        // ================ TEXTS ================ //
        // ======================================= //
            // description
            descr_en_field:         `descr_en_${field}`,
            descr_pt_field:         `descr_pt_${field}`,
            // about
            about_en_field:         `about_en_${field}`,
            about_pt_field:         `about_pt_${field}`,
            // text
            text_en_field:          `text_en_${field}`,
            text_pt_field:          `text_pt_${field}`,


        // ======================================== //
        // ================ IFRAME ================ //
        // ======================================== //
            // article
            iframeArticle_en_url:   `iframeArticle_en_url`,
            iframeArticle_pt_url:   `iframeArticle_pt_url`,


        // ======================================= //
        // ================ LINKS ================ //
        // ======================================= //
            // global
            link_tree:              `link_tree`,
            link_website:           `link_website`,
            link_forum:             `link_forum`,
            // contact 
            link_whatsapp:          `link_whatsapp`,
            link_telegram:          `link_telegram`,
            link_email:             `link_email`,
            // media
            link_instagram:         `link_instagram`,
            link_youtube:           `link_youtube`,
            link_tiktok:            `link_tiktok`,
            link_twitter:           `link_twitter`,
            link_linkedin:          `link_linkedin`,
            link_facebook:          `link_facebook`,


        // ========================================= //
        // ================ CONTENT ================ //
        // ========================================= //
            level_post_platform:    `level_post_platform`,
            level_post_publisher:   `level_post_publisher`,
            level_pubsub:           `level_pubsub`,

            
        // ======================================= //
        // ================ MEDIA ================ //
        // ======================================= //
            // main
            imageUrl_field:         `imageUrl_${field}`,
            videoUrl_field:         `videoUrl_${field}`,
            // min
            thumbImgUrl_field:      `thumbImgUrl_${field}`,
            thumbVidUrl_field:      `thumbVidUrl_${field}`,


            // landscape main
            imageLandUrl_field:     `imageLandUrl_${field}`,
            videoLandUrl_field:     `videoLandUrl_${field}`,
            // landscape  min
            thumbImgLandUrl_field:  `thumbImgLandUrl_${field}`,
            thumbVidLandUrl_field:  `thumbVidLandUrl_${field}`,

            
            // portrait main
            imagePortUrl_field:     `imagePortUrl_${field}`,
            videoPortUrl_field:     `videoPortUrl_${field}`,
            // portrait min
            thumbImgPortUrl_field:  `thumbImgPortUrl_${field}`,
            thumbVidPortUrl_field:  `thumbVidPortUrl_${field}`,

            
            // video resolution
            resolution:             `resolution`,
            has1080:                `has1080`,
            has720:                 `has720`,
            has480:                 `has480`,
            

        // ========================================= //
        // ================ NUMBERS ================ //
        // ========================================= //
            // stats
            count_views:            `count_views`, 
            count_likes:            `count_likes`, 


        // ========================================== //
        // ================ BUSINESS ================ //
        // ========================================== //
            IPODate:                `IPODate`,
            businessSector:         `businessSector`,
            businessIndustry:       `businessIndustry`,


        // ====================================== //
        // ================ WORK ================ //
        // ====================================== //
            // business
            work_businessHour:      `work_businessHour`,
            work_businessDay:       `work_businessDay`,

            // by day
            work_weekday:           `work_weekday`,
            work_weekend:           `work_weekend`,
            work_weekend_full:      `work_weekend_full`,
            work_weekend_part:      `work_weekend_part`,

            // by hour
            hour_start:             `hour_start`,
            hour_end:               `hour_end`,
    
            work_24h:               `work_24h`,

            work_fullTime:          `work_fullTime`,
            work_partTime:          `work_partTime`,
            
            work_day:               `work_day`,
            work_night:             `work_night`,

            // online
            makeVideoCall:          `makeVideoCall`,


        // ======================================== //
        // ================ CRYPTO ================ //
        // ======================================== //
            wallet_btc:             `wallet_btc`,
            wallet_eth:             `wallet_eth`,


        // ======================================= //
        // ================ PRICE ================ //
        // ======================================= //
            currency:               `currency`,
            
            // by day
            price_weekday:          `price_weekday`,
            price_weekend:          `price_weekend`,

            // by hour
            price_hour:             `price_hour`,
            price_period:           `price_period`,
            price_extra:            `price_extra`,

            price_fullTime:         `price_fullTime`,
            price_partTime:         `price_partTime`,

            price_day:              `price_day`,
            price_night:            `price_night`,



            // about
            isFree:                 `isFree`,
            isFreemium:             `isFreemium`,
            isPremium:              `isPremium`,



            // common
            price:                  `price`,
            discountPct:            `discountPct`,

            // promotion
            promotion_price:        `promotion_price`,
            promotion_discountPct:  `promotion_discountPct`, 

            // extras
            extra_price:            `extra_price`,
            extra_discountPct:      `extra_discountPct`,



            // packs price
            basic_price:            `basic_price`,
            premium_price:          `premium_price`,
            exclusive_price:        `exclusive_price`,
            
            basic_discountPct:      `basic_discountPct`,
            premium_discountPct:    `premium_discountPct`,
            exclusive_discountPct:  `exclusive_discountPct`,



            // time price
            price_1h:               `price_1h`,
            price_2h:               `price_2h`,
            price_3h:               `price_3h`,
            price_1d:               `price_1d`,
            price_2d:               `price_2d`,
            price_3d:               `price_3d`,
            price_1w:               `price_1w`,
            price_2w:               `price_2w`,
            price_3w:               `price_3w`,

            // unit price
            price_1u:               `price_1u`,
            price_2u:               `price_2u`,
            price_3u:               `price_3u`,
            price_10u:              `price_10u`,
            price_20u:              `price_20u`,
            price_30u:              `price_30u`,
            price_100u:             `price_100u`,
            price_200u:             `price_200u`,
            price_300u:             `price_300u`,
            price_1000u:            `price_1000u`,
            price_2000u:            `price_2000u`,
            price_3000u:            `price_3000u`,


        // ======================================= //
        // ================ DATES ================ //
        // ======================================= //
            // date
            create_field:           `create_${field}`,
            update_field:           `update_${field}`,
            delete_field:           `delete_${field}`,

    }
}
