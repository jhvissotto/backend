/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 11/02/2023 16:24:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for td_post
-- ----------------------------
DROP TABLE IF EXISTS `td_post`;
CREATE TABLE `td_post`  (
  `DELETE_sortNumber_post` int NULL DEFAULT NULL,
  `pk_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_slug_en_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_slug_pt_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isVisible_post` bit(1) NULL DEFAULT NULL,
  `DELETE_launchDate_post` datetime NULL DEFAULT NULL,
  `DELETE_name_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_title_en_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_title_pt_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `count_views` int NULL DEFAULT NULL,
  `count_likes` int NULL DEFAULT NULL,
  `DELETE_propA_post` int NULL DEFAULT NULL,
  `DELETE_propB_post` int NULL DEFAULT NULL,
  `DELETE_create_post` datetime NULL DEFAULT NULL,
  `DELETE_update_post` datetime NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_post
-- ----------------------------
INSERT INTO `td_post` VALUES (NULL, '1', NULL, NULL, b'1', NULL, NULL, NULL, NULL, 100, 10, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '2', NULL, NULL, b'1', NULL, NULL, NULL, NULL, 200, 20, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '3', NULL, NULL, b'0', NULL, NULL, NULL, NULL, 300, 30, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '4', NULL, NULL, b'1', NULL, NULL, NULL, NULL, 400, 40, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 500, 50, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 600, 60, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 700, 70, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '8', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 800, 80, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 900, 90, NULL, NULL, NULL, NULL);
INSERT INTO `td_post` VALUES (NULL, '10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1000, 100, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for td_tag
-- ----------------------------
DROP TABLE IF EXISTS `td_tag`;
CREATE TABLE `td_tag`  (
  `DELETE_sortNumber_tag` int NULL DEFAULT NULL,
  `pk_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_slug_en_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_slug_pt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `isVisible_tag` bit(1) NULL DEFAULT NULL,
  `DELETE_launchDate_tag` datetime NULL DEFAULT NULL,
  `DELETE_name_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_title_en_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_title_pt_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_propA_tag` int NULL DEFAULT NULL,
  `DELETE_propB_tag` int NULL DEFAULT NULL,
  `DELETE_create_tag` datetime NULL DEFAULT NULL,
  `DELETE_update_tag` datetime NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_tag
-- ----------------------------
INSERT INTO `td_tag` VALUES (NULL, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '2', NULL, NULL, b'1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '13', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '14', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '6', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '7', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '8', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '9', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '10', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '11', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '12', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '3', NULL, NULL, b'1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '4', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_tag` VALUES (NULL, '15', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for td_user
-- ----------------------------
DROP TABLE IF EXISTS `td_user`;
CREATE TABLE `td_user`  (
  `pk_user` int NULL DEFAULT NULL,
  `isVisible_user` bit(1) NULL DEFAULT NULL,
  `DELETE_name_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_propA_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_propB_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `DELETE_create_user` datetime NULL DEFAULT NULL,
  `DELETE_update_user` datetime NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_user
-- ----------------------------
INSERT INTO `td_user` VALUES (1, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (2, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (3, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (4, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (5, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (6, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (7, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (8, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (9, b'1', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `td_user` VALUES (10, b'1', NULL, NULL, NULL, NULL, NULL);

-- ----------------------------
-- Table structure for tr_post_tag
-- ----------------------------
DROP TABLE IF EXISTS `tr_post_tag`;
CREATE TABLE `tr_post_tag`  (
  `DELETE_pk_post_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_tag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_post_tag
-- ----------------------------
INSERT INTO `tr_post_tag` VALUES (NULL, '2', '1');
INSERT INTO `tr_post_tag` VALUES (NULL, '3', '1');
INSERT INTO `tr_post_tag` VALUES (NULL, '1', '1');
INSERT INTO `tr_post_tag` VALUES (NULL, '4', '2');
INSERT INTO `tr_post_tag` VALUES (NULL, '5', '2');
INSERT INTO `tr_post_tag` VALUES (NULL, '6', '2');
INSERT INTO `tr_post_tag` VALUES (NULL, '7', '3');
INSERT INTO `tr_post_tag` VALUES (NULL, '8', '3');
INSERT INTO `tr_post_tag` VALUES (NULL, '9', '3');

-- ----------------------------
-- Table structure for tr_user_post
-- ----------------------------
DROP TABLE IF EXISTS `tr_user_post`;
CREATE TABLE `tr_user_post`  (
  `DELETE_pk_user_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_user` int NULL DEFAULT NULL,
  `fk_post` int NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_user_post
-- ----------------------------
INSERT INTO `tr_user_post` VALUES (NULL, 1, 1);
INSERT INTO `tr_user_post` VALUES (NULL, 1, 2);
INSERT INTO `tr_user_post` VALUES (NULL, 1, 3);
INSERT INTO `tr_user_post` VALUES (NULL, 1, 4);
INSERT INTO `tr_user_post` VALUES (NULL, 2, 5);
INSERT INTO `tr_user_post` VALUES (NULL, 2, 6);
INSERT INTO `tr_user_post` VALUES (NULL, 2, 7);
INSERT INTO `tr_user_post` VALUES (NULL, 2, 8);
INSERT INTO `tr_user_post` VALUES (NULL, 3, 9);
INSERT INTO `tr_user_post` VALUES (NULL, 3, 10);
INSERT INTO `tr_user_post` VALUES (NULL, 3, 11);
INSERT INTO `tr_user_post` VALUES (NULL, 3, 12);

SET FOREIGN_KEY_CHECKS = 1;
