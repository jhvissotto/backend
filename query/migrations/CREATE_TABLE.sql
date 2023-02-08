
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for table
-- ----------------------------
DROP TABLE IF EXISTS `table`;
CREATE TABLE `table`  (
  -- ====================================== --
  -- ================ KEYS ================ --
  -- ====================================== --
    -- -- ids
    -- `id_bson_field`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `id_ainc_field`         int                                                                   NOT NULL  AUTO_INCREMENT                                          ,
    -- `id_uuid_field`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `id_short_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,

    -- -- keys
    -- `pk_field`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `slug_en_field`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `slug_pt_field`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,

    -- -- status
    -- `isVisible_field`       bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `launchDate`            datetime                                                              NULL      DEFAULT NULL                                            ,
    -- -- numeric
    -- `codeNumber_field`      int                                                                   NULL      DEFAULT NULL                                            ,
    -- `sortNumber_field`      int                                                                   NULL      DEFAULT NULL                                            ,


  -- ====================================== --
  -- ================ USER ================ --
  -- ====================================== --
    -- -- login
    -- `email`                 varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `cellPhone`             int                                                                   NULL      DEFAULT NULL                                            ,
    -- `passHash`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- -- recovery
    -- `recovery_email`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `recovery_cellPhone`    int                                                                   NULL      DEFAULT NULL                                            ,
    -- `recovery_tip`          varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `recovery_tipHash`      varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- -- status
    -- `isVerified`            bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `isBanned`              bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `isStaff`               bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- -- level
    -- `level_user`            int                                                                   NULL      DEFAULT NULL                                            ,
    -- `level_staff`           int                                                                   NULL      DEFAULT NULL                                            ,
    -- -- visual
    -- `avatarUrl`             varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `introUrl`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- -- about
    -- `bithDate`              datetime                                                              NULL      DEFAULT NULL                                            ,
    -- `sex`                   varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `occupation`            varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
    -- `degree`                varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- physical
    -- `color_eyes`            varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `color_hair`            varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- languages
    -- `speak_en`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `speak_es`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `speak_fr`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `speak_it`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `speak_pt`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- legal
    -- `vpeak_pt`              varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `govId`                 int                                                                   NULL      DEFAULT NULL                                            ,
    -- `taxId`                 int                                                                   NULL      DEFAULT NULL                                            ,

      
  -- ========================================== --
  -- ================ LOCATION ================ --
  -- ========================================== --
    -- `phoneNumber`           int                                                                   NULL      DEFAULT NULL                                            ,
    -- `address_full`          varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    

    -- -- location 1
    -- `address_country`       varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `address_region`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `address_city`          varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    

    -- -- location 2
    -- `address_street`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `address_buildNum`      int                                                                   NULL      DEFAULT NULL                                            ,
    -- `address_flatNum`       int                                                                   NULL      DEFAULT NULL                                            ,
    -- `address_ref`           varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    

    -- -- accomodation
    -- `has_wifi`              bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_garage`            bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_breakfast`         bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_lunch`             bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_dinner`            bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_airCond`           bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_pool`              bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `has_hydro`             bit       (1)                                                         NULL      DEFAULT NULL                                            ,


  -- ======================================= --
  -- ================ NAMES ================ --
  -- ======================================= --
    -- -- name
    -- `name_field`            varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `nameFirst_field`       varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `nameLast_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- title
    -- `title_en_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `title_pt_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    


  -- ======================================= --
  -- ================ TEXTS ================ --
  -- ======================================= --
    -- -- description
    -- `descr_en_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `descr_pt_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- about
    -- `about_en_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `about_pt_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- text
    -- `text_en_field`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `text_pt_field`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    


  -- ======================================== --
  -- ================ IFRAME ================ --
  -- ======================================== --
    -- -- article
    -- `iframeArticle_en_url`  varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `iframeArticle_pt_url`  varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    


  -- ======================================= --
  -- ================ LINKS ================ --
  -- ======================================= --
    -- -- global
    -- `link_tree`             varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_website`          varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_forum`            varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- contact 
    -- `link_whatsapp`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_telegram`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_email`            varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- media
    -- `link_instagram`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_youtube`          varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_tiktok`           varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_twitter`          varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_linkedin`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `link_facebook`         varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    


  -- ========================================= --
  -- ================ CONTENT ================ --
  -- ========================================= --
    -- `level_post_platform`   int                                                                   NULL      DEFAULT NULL                                            ,
    -- `level_post_publisher`  int                                                                   NULL      DEFAULT NULL                                            ,
    -- `level_pubsub`          int                                                                   NULL      DEFAULT NULL                                            ,


  -- ======================================= --
  -- ================ MEDIA ================ --
  -- ======================================= --
    -- -- main
    -- `imageUrl_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `videoUrl_field`        varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- min
    -- `thumbImgUrl_field`     varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `thumbVidUrl_field`     varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    


    -- -- landscape main
    -- `imageLandUrl_field`    varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `videoLandUrl_field`    varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- landscape min
    -- `thumbImgLandUrl_field` varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `thumbVidLandUrl_field` varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    

    
    -- -- portrait main
    -- `imagePortUrl_field`    varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `videoPortUrl_field`    varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- -- portrait min
    -- `thumbImgPortUrl_field` varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    
    -- `thumbVidPortUrl_field` varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,    


  -- ========================================= --
  -- ================ NUMBERS ================ --
  -- ========================================= --
    -- -- stats
    -- `count_views`           int                                                                   NULL      DEFAULT NULL                                            ,
    -- `count_likes`           int                                                                   NULL      DEFAULT NULL                                            ,


  -- ====================================== --
  -- ================ WORK ================ --
  -- ====================================== --
    -- -- business
    -- `work_businessHour`     bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `work_businessDay`      bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    
    -- -- by day
    -- `work_weekday`          bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `work_weekend`          bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `work_weekend_full`     bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `work_weekend_part`     bit       (1)                                                         NULL      DEFAULT NULL                                            ,

    -- -- by hour
    -- `hour_start`            time                                                                  NULL      DEFAULT NULL                                            ,
    -- `hour_end`              time                                                                  NULL      DEFAULT NULL                                            ,

    -- `work_fullTime`         bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `work_partTime`         bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    
    -- `work_day`              bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `work_night`            bit       (1)                                                         NULL      DEFAULT NULL                                            ,


  -- ======================================= --
  -- ================ PRICE ================ --
  -- ======================================= --
    -- -- by day
    -- `price_weekday`         decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_weekend`         decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,

    -- -- by hour
    -- `price_hour`            decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_period`          decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_extra`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    
    -- `price_fullTime`        decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_partTime`        decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,

    -- `price_day`             decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_night`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,



    -- -- about
    -- `isFree`                bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `isFreemium`            bit       (1)                                                         NULL      DEFAULT NULL                                            ,
    -- `isPremium`             bit       (1)                                                         NULL      DEFAULT NULL                                            ,



    -- -- common
    -- `price`                 decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `discountPct`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,

    -- -- promotion
    -- `promotion_price`       decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `promotion_discountPct` decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,

    -- -- extras
    -- `extra_price`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `extra_discountPct`     decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,



    -- -- packs price
    -- `basic_price`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `premium_price`         decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `exclusive_price`       decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,

    -- `basic_discountPct`     decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `premium_discountPct`   decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `exclusive_discountPct` decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,



    -- -- time price
    -- `price_1h`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_2h`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_3h`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_1d`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_2d`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_3d`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_1w`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_2w`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_3w`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,

    -- -- unit price
    -- `price_1u`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_2u`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_3u`              decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_10u`             decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_20u`             decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_30u`             decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_100u`            decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_200u`            decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_300u`            decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_1000u`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_2000u`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
    -- `price_3000u`           decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,


  -- ======================================= --
  -- ================ DATES ================ --
  -- ======================================= --
    -- -- date
    -- `create_field`          datetime                                                              NULL      DEFAULT CURRENT_TIMESTAMP                               ,
    -- `update_field`          datetime                                                              NULL      DEFAULT NULL                ON UPDATE CURRENT_TIMESTAMP ,
    -- `delete_field`          datetime                                                              NULL      DEFAULT NUll                                            ,  


  PRIMARY KEY (`id_ainc_field`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
