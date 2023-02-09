import { z } from '~/src/libs/helpers/schema'

// prettier-ignore
export function v2(field: string) {

    return {
        // ====================================== //
        // ================ KEYS ================ //
        // ====================================== //
            // ids
            id_bson_field:          { key: `id_bson_${field}`,      type: z.string()    },
            id_ainc_field:          { key: `id_ainc_${field}`,      type: z.number()    },
            id_uuid_field:          { key: `id_uuid_${field}`,      type: z.string()    },
            id_short_field:         { key: `id_short_${field}`,     type: z.string()    },

            // keys
            pk_field:               { key: `pk_${field}`,           type: z.any()       },
            slug_en_field:          { key: `slug_en_${field}`,      type: z.string()    },
            slug_pt_field:          { key: `slug_pt_${field}`,      type: z.string()    },

            // status
            isVisible_field:        { key: `isVisible_${field}`,    type: z.boolean()   },
            launchDate:             { key: `launchDate`,            type: z.date()      },
            // code
            codeNumber_field:       { key: `codeNumber_${field}`,   type: z.number()    },
            codeText_field:         { key: `codeText_${field}`,     type: z.string()    },
            // 
            sortNumber_field:       { key: `sortNumber_${field}`,   type: z.number()    },


        // ====================================== //
        // ================ USER ================ //
        // ====================================== //
            // login
            email:                  { key: `email`,                 type: z.string()    },
            cellPhone:              { key: `cellPhone`,             type: z.number()    },
            passHash:               { key: `passHash`,              type: z.string()    },
            // recovery
            recovery_email:         { key: `recovery_email`,        type: z.string()    },
            recovery_cellPhone:     { key: `recovery_cellPhone`,    type: z.number()    },
            recovery_tip:           { key: `recovery_tip`,          type: z.string()    },
            recovery_tipHash:       { key: `recovery_tipHash`,      type: z.string()    },
            // status
            isVerified:             { key: `isVerified`,            type: z.boolean()   },
            isBanned:               { key: `isBanned`,              type: z.boolean()   },
            isStaff:                { key: `isStaff`,               type: z.boolean()   },
            // level
            level_user:             { key: `level_user`,            type: z.number()    },
            level_staff:            { key: `level_staff`,           type: z.number()    },
            // visual
            avatarUrl:              { key: `avatarUrl`,             type: z.string()    },
            introUrl:               { key: `introUrl`,              type: z.string()    },
            // about
            bithDate:               { key: `bithDate`,              type: z.date()      },
            sex:                    { key: `sex`,                   type: z.string()    },
            occupation:             { key: `occupation`,            type: z.string()    },
            degree:                 { key: `degree`,                type: z.string()    },
            // physical
            color_eyes:             { key: `color_eyes`,            type: z.string()    },
            color_hair:             { key: `color_hair`,            type: z.string()    },
            // languages
            speak_en:               { key: `speak_en`,              type: z.number()    },
            speak_es:               { key: `speak_es`,              type: z.number()    },
            speak_fr:               { key: `speak_fr`,              type: z.number()    },
            speak_it:               { key: `speak_it`,              type: z.number()    },
            speak_pt:               { key: `speak_pt`,              type: z.number()    },
            // legal
            nationality:            { key: `nationality`,           type: z.string()    },
            govId:                  { key: `govId`,                 type: z.number()    },
            taxId:                  { key: `taxId`,                 type: z.number()    },


        // ========================================== //
        // ================ LOCATION ================ //
        // ========================================== //
            phoneNumber:            { key: `phoneNumber`,           type: z.number()    },
            address_full:           { key: `address_full`,          type: z.string()    },
    
            // location 1
            address_country:        { key: `address_country`,       type: z.string()    },
            address_region:         { key: `address_region`,        type: z.string()    },
            address_city:           { key: `address_city`,          type: z.string()    },

            // location 2
            address_street:         { key: `address_street`,        type: z.string()    },
            address_buildNum:       { key: `address_buildNum`,      type: z.number()    },
            address_flatNum:        { key: `address_flatNum`,       type: z.number()    },
            address_ref:            { key: `address_ref`,           type: z.string()    },
            
            // accomodation
            has_wifi:               { key: `has_wifi`,              type: z.boolean()   },
            has_garage:             { key: `has_garage`,            type: z.boolean()   },
            has_breakfast:          { key: `has_breakfast`,         type: z.boolean()   },
            has_lunch:              { key: `has_lunch`,             type: z.boolean()   },
            has_dinner:             { key: `has_dinner`,            type: z.boolean()   },
            has_airCond:            { key: `has_airCond`,           type: z.boolean()   },
            has_pool:               { key: `has_pool`,              type: z.boolean()   },
            has_hydro:              { key: `has_hydro`,             type: z.boolean()   },


        // ======================================= //
        // ================ NAMES ================ //
        // ======================================= //
            // name
            name_field:             { key: `name_${field}`,                 type: z.string()    },
            nameFirst_field:        { key: `nameFirst_${field}`,            type: z.string()    },
            nameLast_field:         { key: `nameLast_${field}`,             type: z.string()    },
            // title
            title_en_field:         { key: `title_en_${field}`,             type: z.string()    },
            title_pt_field:         { key: `title_pt_${field}`,             type: z.string()    },
            // alias
            alias:                  { key: `alias${field}`,                 type: z.string()    },
            alias_en_field:         { key: `alias_en_field${field}`,        type: z.string()    },
            alias_pt_field:         { key: `alias_pt_field${field}`,        type: z.string()    },
            // adjective
            adjective:              { key: `adjective${field}`,             type: z.string()    },
            adjective_en_field:     { key: `adjective_en_field${field}`,    type: z.string()    },
            adjective_pt_field:     { key: `adjective_pt_field${field}`,    type: z.string()    },
        

        // ======================================= //
        // ================ TEXTS ================ //
        // ======================================= //
            // description
            descr_en_field:         { key: `descr_en_${field}`,     type: z.string()    },
            descr_pt_field:         { key: `descr_pt_${field}`,     type: z.string()    },
            // about
            about_en_field:         { key: `about_en_${field}`,     type: z.string()    },
            about_pt_field:         { key: `about_pt_${field}`,     type: z.string()    },
            // text
            text_en_field:          { key: `text_en_${field}`,      type: z.string()    },
            text_pt_field:          { key: `text_pt_${field}`,      type: z.string()    },


        // ======================================== //
        // ================ IFRAME ================ //
        // ======================================== //
            // article
            iframeArticle_en_url:   { key: `iframeArticle_en_url`,  type: z.string()    },
            iframeArticle_pt_url:   { key: `iframeArticle_pt_url`,  type: z.string()    },


        // ======================================= //
        // ================ LINKS ================ //
        // ======================================= //
            // global
            link_tree:              { key: `link_tree`,             type: z.string()    },
            link_website:           { key: `link_website`,          type: z.string()    },
            link_forum:             { key: `link_forum`,            type: z.string()    },
            // contact 
            link_whatsapp:          { key: `link_whatsapp`,         type: z.string()    },
            link_telegram:          { key: `link_telegram`,         type: z.string()    },
            link_email:             { key: `link_email`,            type: z.string()    },
            // media
            link_instagram:         { key: `link_instagram`,        type: z.string()    },
            link_youtube:           { key: `link_youtube`,          type: z.string()    },
            link_tiktok:            { key: `link_tiktok`,           type: z.string()    },
            link_twitter:           { key: `link_twitter`,          type: z.string()    },
            link_linkedin:          { key: `link_linkedin`,         type: z.string()    },
            link_facebook:          { key: `link_facebook`,         type: z.string()    },


        // ========================================= //
        // ================ CONTENT ================ //
        // ========================================= //
            level_post_platform:    { key: `level_post_platform`,   type: z.number()    },
            level_post_publisher:   { key: `level_post_publisher`,  type: z.number()    },
            level_pubsub:           { key: `level_pubsub`,          type: z.number()    },


        // ======================================= //
        // ================ MEDIA ================ //
        // ======================================= //
            // main
            imageUrl_field:         { key: `imageUrl_${field}`,         type: z.string()    },
            videoUrl_field:         { key: `videoUrl_${field}`,         type: z.string()    },
            // min
            thumbImgUrl_field:      { key: `thumbImgUrl_${field}`,      type: z.string()    },
            thumbVidUrl_field:      { key: `thumbVidUrl_${field}`,      type: z.string()    },


            // landscape main
            imageLandUrl_field:     { key: `imageLandUrl_${field}`,     type: z.string()    },
            videoLandUrl_field:     { key: `videoLandUrl_${field}`,     type: z.string()    },
            // landscape min
            thumbImgLandUrl_field:  { key: `thumbImgLandUrl_${field}`,  type: z.string()    },
            thumbVidLandUrl_field:  { key: `thumbVidLandUrl_${field}`,  type: z.string()    },

            
            // portrait main
            imagePortUrl_field:     { key: `imagePortUrl_${field}`,     type: z.string()    },
            videoPortUrl_field:     { key: `videoPortUrl_${field}`,     type: z.string()    },
            // portrait min
            thumbImgPortUrl_field:  { key: `thumbImgPortUrl_${field}`,  type: z.string()    },
            thumbVidPortUrl_field:  { key: `thumbVidPortUrl_${field}`,  type: z.string()    },


        // ========================================= //
        // ================ NUMBERS ================ //
        // ========================================= //
            // stats
            count_views:            { key: `count_views`,           type: z.number()    }, 
            count_likes:            { key: `count_likes`,           type: z.number()    }, 
            
            
        // ========================================== //
        // ================ BUSINESS ================ //
        // ========================================== //
            IPODate:                { key: `IPODate`,               type: z.date()      }, 
            businessSector:         { key: `businessSector`,        type: z.string()    }, 
            businessIndustry:       { key: `businessIndustry`,      type: z.string()    }, 


        // ====================================== //
        // ================ WORK ================ //
        // ====================================== //
            // business
            work_businessHour:      { key: `work_businessHour`,     type: z.boolean()   },
            work_businessDay:       { key: `work_businessDay`,      type: z.boolean()   },
            
            // by day
            work_weekday:           { key: `work_weekday`,          type: z.boolean()   },
            work_weekend:           { key: `work_weekend`,          type: z.boolean()   },
            work_weekend_full:      { key: `work_weekend_full`,     type: z.boolean()   },
            work_weekend_part:      { key: `work_weekend_part`,     type: z.boolean()   },

            // by hour
            hour_start:             { key: `hour_start`,            type: z.number()    },
            hour_end:               { key: `hour_end`,              type: z.number()    },
    
            work_24h:               { key: `work_24h`,              type: z.boolean()   },
            
            work_fullTime:          { key: `work_fullTime`,         type: z.boolean()   },
            work_partTime:          { key: `work_partTime`,         type: z.boolean()   },
            
            work_day:               { key: `work_day`,              type: z.boolean()   },
            work_night:             { key: `work_night`,            type: z.boolean()   },


        // ======================================== //
        // ================ CRYPTO ================ //
        // ======================================== //
            wallet_btc:             { key: `wallet_btc`,            type: z.string()    }, 
            wallet_eth:             { key: `wallet_eth`,            type: z.string()    }, 

            
        // ======================================= //
        // ================ PRICE ================ //
        // ======================================= //
            currency:               { key: `currency`,              type: z.string()    },
            
            // by day
            price_weekday:          { key: `price_weekday`,         type: z.number()    },
            price_weekend:          { key: `price_weekend`,         type: z.number()    },

            // by hour
            price_hour:             { key: `price_hour`,            type: z.number()    },
            price_period:           { key: `price_period`,          type: z.number()    },
            price_extra:            { key: `price_extra`,           type: z.number()    },
            
            price_fullTime:         { key: `price_fullTime`,        type: z.number()    },
            price_partTime:         { key: `price_partTime`,        type: z.number()    },

            price_day:              { key: `price_day`,             type: z.number()    },
            price_night:            { key: `price_night`,           type: z.number()    },



            // about
            isFree:                 { key: `isFree`,                type: z.boolean()   },
            isFreemium:             { key: `isFreemium`,            type: z.boolean()   },
            isPremium:              { key: `isPremium`,             type: z.boolean()   },



            // common
            price:                  { key: `price`,                 type: z.number()    },
            discountPct:            { key: `discountPct`,           type: z.number()    },

            // promotion
            promotion_price:        { key: `promotion_price`,       type: z.number()    },
            promotion_discountPct:  { key: `promotion_discountPct`, type: z.number()    }, 

            // extras
            extra_price:            { key: `extra_price`,           type: z.number()    },
            extra_discountPct:      { key: `extra_discountPct`,     type: z.number()    },



            // packs price
            basic_price:            { key: `basic_price`,           type: z.number()    },
            premium_price:          { key: `premium_price`,         type: z.number()    },
            exclusive_price:        { key: `exclusive_price`,       type: z.number()    },

            basic_discountPct:      { key: `basic_discountPct`,     type: z.number()    },
            premium_discountPct:    { key: `premium_discountPct`,   type: z.number()    },
            exclusive_discountPct:  { key: `exclusive_discountPct`, type: z.number()    },



            // time price
            price_1h:               { key: `price_1h`,              type: z.number()    },
            price_2h:               { key: `price_2h`,              type: z.number()    },
            price_3h:               { key: `price_3h`,              type: z.number()    },
            price_1d:               { key: `price_1d`,              type: z.number()    },
            price_2d:               { key: `price_2d`,              type: z.number()    },
            price_3d:               { key: `price_3d`,              type: z.number()    },
            price_1w:               { key: `price_1w`,              type: z.number()    },
            price_2w:               { key: `price_2w`,              type: z.number()    },
            price_3w:               { key: `price_3w`,              type: z.number()    },

            // unit price
            price_1u:               { key: `price_1u`,              type: z.number()    },
            price_2u:               { key: `price_2u`,              type: z.number()    },
            price_3u:               { key: `price_3u`,              type: z.number()    },
            price_10u:              { key: `price_10u`,             type: z.number()    },
            price_20u:              { key: `price_20u`,             type: z.number()    },
            price_30u:              { key: `price_30u`,             type: z.number()    },
            price_100u:             { key: `price_100u`,            type: z.number()    },
            price_200u:             { key: `price_200u`,            type: z.number()    },
            price_300u:             { key: `price_300u`,            type: z.number()    },
            price_1000u:            { key: `price_1000u`,           type: z.number()    },
            price_2000u:            { key: `price_2000u`,           type: z.number()    },
            price_3000u:            { key: `price_3000u`,           type: z.number()    },



        // ======================================= //
        // ================ DATES ================ //
        // ======================================= //
            // date
            create_field:           { key: `create_${field}`,       type: z.date()      },
            update_field:           { key: `update_${field}`,       type: z.date()      },
            delete_field:           { key: `delete_${field}`,       type: z.date()      },


    }
}
