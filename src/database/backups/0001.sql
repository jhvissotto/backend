/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : backend

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 14/01/2023 16:18:18
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for td_post
-- ----------------------------
DROP TABLE IF EXISTS `td_post`;
CREATE TABLE `td_post`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `pk_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`) USING BTREE,
  UNIQUE INDEX `pk_slug`(`pk_slug`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_post
-- ----------------------------
INSERT INTO `td_post` VALUES (1, 'slug1', 'title1', 'text1', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (2, 'slug2', 'title2', 'text2', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (3, 'slug3', 'title3', 'text3', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (4, 'slug4', 'title4', 'text4', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (5, 'slug5', 'title5', 'text5', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (6, 'slug6', 'title6', 'text6', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (7, 'slug7', 'title7', 'text7', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (8, 'slug8', 'title8', 'text8', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (9, 'slug9', 'title9', 'text9', '2023-01-14 15:44:58', NULL);
INSERT INTO `td_post` VALUES (10, 'slug10', 'title10', 'text10', '2023-01-14 15:44:58', NULL);

-- ----------------------------
-- Table structure for td_user
-- ----------------------------
DROP TABLE IF EXISTS `td_user`;
CREATE TABLE `td_user`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `pk_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `passHash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`) USING BTREE,
  UNIQUE INDEX `pk_email`(`pk_email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_user
-- ----------------------------
INSERT INTO `td_user` VALUES (1, 'email1', 'name1', NULL, '2023-01-14 15:56:41', NULL);
INSERT INTO `td_user` VALUES (2, 'email2', 'name2', NULL, '2023-01-14 15:56:41', NULL);
INSERT INTO `td_user` VALUES (3, 'email3', 'name3', NULL, '2023-01-14 15:56:41', NULL);

-- ----------------------------
-- Table structure for tr_user_post
-- ----------------------------
DROP TABLE IF EXISTS `tr_user_post`;
CREATE TABLE `tr_user_post`  (
  `_id` int NOT NULL AUTO_INCREMENT,
  `fk_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_slug` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`) USING BTREE,
  INDEX `tr_user_post_ibfk_1`(`fk_email`) USING BTREE,
  INDEX `tr_user_post_ibfk_2`(`fk_slug`) USING BTREE,
  CONSTRAINT `tr_user_post_ibfk_1` FOREIGN KEY (`fk_email`) REFERENCES `td_user` (`pk_email`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `tr_user_post_ibfk_2` FOREIGN KEY (`fk_slug`) REFERENCES `td_post` (`pk_slug`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_user_post
-- ----------------------------
INSERT INTO `tr_user_post` VALUES (1, 'email1', 'slug1', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (2, 'email1', 'slug2', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (3, 'email1', 'slug3', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (4, 'email1', 'slug4', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (5, 'email2', 'slug3', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (6, 'email2', 'slug4', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (7, 'email2', 'slug7', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (8, 'email2', 'slug8', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (9, 'email2', 'slug5', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (10, 'email2', 'slug6', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (11, 'email3', 'slug7', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (12, 'email3', 'slug8', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (13, 'email3', 'slug9', '2023-01-14 16:17:06', NULL);
INSERT INTO `tr_user_post` VALUES (14, 'email3', 'slug10', '2023-01-14 16:17:06', NULL);

SET FOREIGN_KEY_CHECKS = 1;
