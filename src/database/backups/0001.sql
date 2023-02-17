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

 Date: 16/02/2023 20:07:26
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for td_level
-- ----------------------------
DROP TABLE IF EXISTS `td_level`;
CREATE TABLE `td_level`  (
  `id_ainc_level` int NOT NULL AUTO_INCREMENT,
  `pk_level` int NULL DEFAULT NULL,
  `title_en_level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `title_pt_level` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_ainc_level`) USING BTREE,
  UNIQUE INDEX `pk_level`(`pk_level`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_level
-- ----------------------------
INSERT INTO `td_level` VALUES (0, 0, 'Free', 'Gratis');
INSERT INTO `td_level` VALUES (1, 1, 'Freemium', 'Freemium');
INSERT INTO `td_level` VALUES (2, 2, 'Registered', 'Registrado');
INSERT INTO `td_level` VALUES (3, 3, 'Trial', 'Teste');
INSERT INTO `td_level` VALUES (4, 4, 'Paid', 'Pago');
INSERT INTO `td_level` VALUES (5, 5, 'Premium', 'Premium');
INSERT INTO `td_level` VALUES (6, 6, 'Exclusive', 'Esclusivo');

-- ----------------------------
-- Table structure for td_post
-- ----------------------------
DROP TABLE IF EXISTS `td_post`;
CREATE TABLE `td_post`  (
  `id_ainc_post` int NOT NULL AUTO_INCREMENT,
  `pk_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title_en_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `text_en_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_post` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_post` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ainc_post`) USING BTREE,
  UNIQUE INDEX `pk_slug`(`pk_post`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 17 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

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
  `id_ainc_user` int NOT NULL AUTO_INCREMENT,
  `pk_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `name_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `passHash` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_user` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_user` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ainc_user`) USING BTREE,
  UNIQUE INDEX `pk_email`(`pk_user`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of td_user
-- ----------------------------
INSERT INTO `td_user` VALUES (1, 'email1', 'name1', '$2b$10$BpiAbfRC6aNum2lC6CA0oOhSdPAehePESFTMhzJhIgFgoqYscsNLK', '2023-01-14 15:56:40', NULL);
INSERT INTO `td_user` VALUES (2, 'email2', 'name2', '$2b$10$BpiAbfRC6aNum2lC6CA0oOxQsvAikdTtIsjkQV1I3RISCGN7UoHCK', '2023-01-14 15:56:42', NULL);
INSERT INTO `td_user` VALUES (3, 'email3', 'name3', '$2b$10$BpiAbfRC6aNum2lC6CA0oOcS/YeEsGXRcarhBBLYJ7kk3b3k.dz7m', '2023-01-14 15:56:43', NULL);

-- ----------------------------
-- Table structure for tr_post_level
-- ----------------------------
DROP TABLE IF EXISTS `tr_post_level`;
CREATE TABLE `tr_post_level`  (
  `id_ainc_post_level` int NOT NULL AUTO_INCREMENT,
  `fk_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_level` int NULL DEFAULT NULL,
  `create_post_level` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_post_level` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ainc_post_level`) USING BTREE,
  INDEX `fk_slug`(`fk_post`) USING BTREE,
  INDEX `fk_level`(`fk_level`) USING BTREE,
  CONSTRAINT `tr_post_level_ibfk_1` FOREIGN KEY (`fk_post`) REFERENCES `td_post` (`pk_post`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `tr_post_level_ibfk_2` FOREIGN KEY (`fk_level`) REFERENCES `td_level` (`pk_level`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_post_level
-- ----------------------------
INSERT INTO `tr_post_level` VALUES (1, 'slug1', 0, '2023-01-17 06:40:59', NULL);
INSERT INTO `tr_post_level` VALUES (2, 'slug2', 0, '2023-01-17 06:41:04', NULL);
INSERT INTO `tr_post_level` VALUES (3, 'slug3', 0, '2023-01-17 06:41:10', NULL);
INSERT INTO `tr_post_level` VALUES (4, 'slug4', 1, '2023-01-17 06:41:13', NULL);
INSERT INTO `tr_post_level` VALUES (5, 'slug5', 1, '2023-01-17 06:41:15', NULL);
INSERT INTO `tr_post_level` VALUES (6, 'slug6', 1, '2023-01-17 06:41:19', NULL);
INSERT INTO `tr_post_level` VALUES (7, 'slug7', 1, '2023-01-17 06:41:22', NULL);
INSERT INTO `tr_post_level` VALUES (8, 'slug8', 2, '2023-01-17 06:41:26', NULL);
INSERT INTO `tr_post_level` VALUES (9, 'slug9', 2, '2023-01-17 06:41:28', NULL);
INSERT INTO `tr_post_level` VALUES (10, 'slug10', 2, '2023-01-17 06:41:31', NULL);

-- ----------------------------
-- Table structure for tr_user_level
-- ----------------------------
DROP TABLE IF EXISTS `tr_user_level`;
CREATE TABLE `tr_user_level`  (
  `id_ainc_user_level` int NOT NULL AUTO_INCREMENT,
  `fk_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_level` int NULL DEFAULT NULL,
  `create_user_level` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_user_level` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ainc_user_level`) USING BTREE,
  INDEX `fk_email`(`fk_user`) USING BTREE,
  INDEX `fk_level`(`fk_level`) USING BTREE,
  CONSTRAINT `tr_user_level_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `td_user` (`pk_user`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `tr_user_level_ibfk_2` FOREIGN KEY (`fk_level`) REFERENCES `td_level` (`pk_level`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tr_user_level
-- ----------------------------
INSERT INTO `tr_user_level` VALUES (1, 'email1', 0, '2023-01-17 06:36:38', NULL);
INSERT INTO `tr_user_level` VALUES (2, 'email2', 1, '2023-01-17 06:36:38', NULL);
INSERT INTO `tr_user_level` VALUES (3, 'email3', 3, '2023-01-17 06:36:38', NULL);

-- ----------------------------
-- Table structure for tr_user_post
-- ----------------------------
DROP TABLE IF EXISTS `tr_user_post`;
CREATE TABLE `tr_user_post`  (
  `id_ainc_user_post` int NOT NULL AUTO_INCREMENT,
  `fk_user` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `fk_post` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `create_user_post` datetime NULL DEFAULT CURRENT_TIMESTAMP,
  `update_user_post` datetime NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_ainc_user_post`) USING BTREE,
  INDEX `tr_user_post_ibfk_2`(`fk_post`) USING BTREE,
  INDEX `tr_user_post_ibfk_1`(`fk_user`) USING BTREE,
  CONSTRAINT `tr_user_post_ibfk_1` FOREIGN KEY (`fk_user`) REFERENCES `td_user` (`pk_user`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `tr_user_post_ibfk_2` FOREIGN KEY (`fk_post`) REFERENCES `td_post` (`pk_post`) ON DELETE RESTRICT ON UPDATE CASCADE
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
