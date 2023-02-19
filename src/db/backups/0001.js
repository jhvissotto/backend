/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MongoDB
 Source Server Version : 40028
 Source Host           : localhost:27017
 Source Schema         : backend

 Target Server Type    : MongoDB
 Target Server Version : 40028
 File Encoding         : 65001

 Date: 18/02/2023 16:04:01
*/


// ----------------------------
// Collection structure for post
// ----------------------------
db.getCollection("post").drop();
db.createCollection("post");

// ----------------------------
// Documents of post
// ----------------------------
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b45"),
    "id_ainc_post": 1,
    "pk_post": "slug1",
    "title_en_post": "title1",
    "text_en_post": "text1",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b46"),
    "id_ainc_post": 2,
    "pk_post": "slug2",
    "title_en_post": "title2",
    "text_en_post": "text2",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b47"),
    "id_ainc_post": 3,
    "pk_post": "slug3",
    "title_en_post": "title3",
    "text_en_post": "text3",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b48"),
    "id_ainc_post": 4,
    "pk_post": "slug4",
    "title_en_post": "title4",
    "text_en_post": "text4",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b49"),
    "id_ainc_post": 5,
    "pk_post": "slug5",
    "title_en_post": "title5",
    "text_en_post": "text5",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b4a"),
    "id_ainc_post": 6,
    "pk_post": "slug6",
    "title_en_post": "title6",
    "text_en_post": "text6",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b4b"),
    "id_ainc_post": 7,
    "pk_post": "slug7",
    "title_en_post": "title7",
    "text_en_post": "text7",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b4c"),
    "id_ainc_post": 8,
    "pk_post": "slug8",
    "title_en_post": "title8",
    "text_en_post": "text8",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b4d"),
    "id_ainc_post": 9,
    "pk_post": "slug9",
    "title_en_post": "title9",
    "text_en_post": "text9",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63f13b0c862400009f004b4e"),
    "id_ainc_post": 10,
    "pk_post": "slug10",
    "title_en_post": "title10",
    "text_en_post": "text10",
    "create_post": "2023-01-14 15:44:58",
    "update_post": null
} ]);

// ----------------------------
// Collection structure for user
// ----------------------------
db.getCollection("user").drop();
db.createCollection("user");

// ----------------------------
// Documents of user
// ----------------------------
db.getCollection("user").insert([ {
    _id: ObjectId("63f13d08862400009f004b52"),
    "id_ainc_user": 1,
    "pk_user": "email1",
    "name_user": "name1",
    passHash: "$2b$10$BpiAbfRC6aNum2lC6CA0oOhSdPAehePESFTMhzJhIgFgoqYscsNLK",
    isStaff: null,
    "level_user": null,
    "level_staff": null,
    "create_user": "2023-01-14 15:56:40",
    "update_user": null
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("63f13d08862400009f004b53"),
    "id_ainc_user": 2,
    "pk_user": "email2",
    "name_user": "name2",
    passHash: "$2b$10$BpiAbfRC6aNum2lC6CA0oOxQsvAikdTtIsjkQV1I3RISCGN7UoHCK",
    isStaff: null,
    "level_user": null,
    "level_staff": null,
    "create_user": "2023-01-14 15:56:42",
    "update_user": null
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("63f13d08862400009f004b54"),
    "id_ainc_user": 3,
    "pk_user": "email3",
    "name_user": "name3",
    passHash: "$2b$10$BpiAbfRC6aNum2lC6CA0oOcS/YeEsGXRcarhBBLYJ7kk3b3k.dz7m",
    isStaff: null,
    "level_user": null,
    "level_staff": null,
    "create_user": "2023-01-14 15:56:43",
    "update_user": null
} ]);
