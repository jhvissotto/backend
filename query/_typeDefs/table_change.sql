ALTER TABLE `test`.`table` 


CHANGE COLUMN `autoInc_field`           `autoInc_custom`            int                                                                   NOT NULL  AUTO_INCREMENT                                              FIRST                           ,
CHANGE COLUMN `integer_field`           `integer_custom`            int                                                                   NULL      DEFAULT NULL                                                AFTER `autoInc_custom`          ,
CHANGE COLUMN `number_field`            `number_custom`             decimal   (10, 2)                                                     NULL      DEFAULT NULL                                                AFTER `integer_custom`          ,
CHANGE COLUMN `boolean_field`           `boolean_custom`            bit       (1)                                                         NULL      DEFAULT NULL                                                AFTER `number_custom`           ,
CHANGE COLUMN `string_field`            `string_custom`             varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                                AFTER `boolean_custom`          ,
CHANGE COLUMN `time_field`              `time_custom`               time                                                                  NULL      DEFAULT NULL                                                AFTER `string_custom`           ,
CHANGE COLUMN `timestamp_field`         `timestamp_custom`          timestamp                                                             NULL      DEFAULT NULL                                                AFTER `time_custom`             ,
CHANGE COLUMN `datetime_create_field`   `datetime_create_custom`    datetime                                                              NULL      DEFAULT CURRENT_TIMESTAMP                                   AFTER `timestamp_custom`        ,
CHANGE COLUMN `datetime_update_field`   `datetime_update_custom`    datetime                                                              NULL      DEFAULT NULL                ON UPDATE CURRENT_TIMESTAMP     AFTER `datetime_create_custom`  ,
CHANGE COLUMN `datetime_delete_field`   `datetime_delete_custom`    datetime                                                              NULL      DEFAULT NUll                                                AFTER `datetime_update_custom`  ,  


DROP PRIMARY KEY,
ADD PRIMARY KEY (`id_ainc_custom`) USING BTREE;
