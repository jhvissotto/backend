

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for table
-- ----------------------------

DROP TABLE IF EXISTS `table`;
CREATE TABLE `table`  (

  `autoInc`               int                                                                   NOT NULL  AUTO_INCREMENT                                          ,
  `integer`               int                                                                   NULL      DEFAULT NULL                                            ,
  `number`                decimal   (10, 2)                                                     NULL      DEFAULT NULL                                            ,
  `boolean`               bit       (1)                                                         NULL      DEFAULT NULL                                            ,
  `string`                varchar   (255)   CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci    NULL      DEFAULT NULL                                            ,
  `time`                  time                                                                  NULL      DEFAULT NULL                                            ,
  `timestamp`             timestamp                                                             NULL      DEFAULT NULL                                            ,
  
  `datetime_create`       datetime                                                              NULL      DEFAULT CURRENT_TIMESTAMP                               ,
  `datetime_lastUpd`      datetime                                                              NULL      DEFAULT CURRENT_TIMESTAMP   ON UPDATE CURRENT_TIMESTAMP ,
  `datetime_update`       datetime                                                              NULL      DEFAULT NULL                ON UPDATE CURRENT_TIMESTAMP ,
  `datetime_delete`       datetime                                                              NULL      DEFAULT NUll                                            ,  


  PRIMARY KEY   (`autoInc`) USING BTREE,
  UNIQUE INDEX  `id`(`id`)  USING BTREE,
  INDEX         `id`(`id`)  USING BTREE

) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of table
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;