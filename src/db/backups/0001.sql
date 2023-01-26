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

 Date: 14/01/2023 16:41:21
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
    _id: ObjectId("63c25871832d0000580016a8"),
    slug: "slug1",
    title: "title1",
    text: "text1",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c25879832d0000580016a9"),
    slug: "slug2",
    title: "title2",
    text: "text2",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c2587b832d0000580016aa"),
    slug: "slug3",
    title: "title3",
    text: "text3",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c2587f832d0000580016ab"),
    slug: "slug4",
    title: "title4",
    text: "text4",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c25881832d0000580016ac"),
    slug: "slug5",
    title: "title5",
    text: "text5",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c25883832d0000580016ad"),
    slug: "slug6",
    title: "title6",
    text: "text6",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c313bc832d0000580016b0"),
    slug: "slug7",
    title: "title7",
    text: "text7",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c313be832d0000580016b1"),
    slug: "slug8",
    title: "title8",
    text: "text8",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c313c1832d0000580016b2"),
    slug: "slug9",
    title: "title9",
    text: "text9",
    createdAt: null,
    updateAt: null
} ]);
db.getCollection("post").insert([ {
    _id: ObjectId("63c313c4832d0000580016b3"),
    slug: "slug10",
    title: "title10",
    text: "text10",
    createdAt: null,
    updateAt: null
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
    _id: ObjectId("63c24c2b832d0000580016a5"),
    email: "email1",
    name: "name1",
    passHash: null,
    createdAt: null,
    updatedAt: null
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("63c24c41832d0000580016a6"),
    email: "email2",
    name: "name2",
    passHash: null,
    createdAt: null,
    updatedAt: null
} ]);
db.getCollection("user").insert([ {
    _id: ObjectId("63c24c46832d0000580016a7"),
    email: "email3",
    name: "name3",
    passHash: null,
    createdAt: null,
    updatedAt: null
} ]);
