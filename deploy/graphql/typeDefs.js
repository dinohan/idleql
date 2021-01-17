"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var typeDefs = "\n  type Song {\n    name: String!\n    youtubeID: String!\n    title: Boolean!\n    thumbnail: String!\n    album: String!\n  }\n\n  type Release {\n    year: String!\n    month: String!\n    date: String!\n  }\n  \n  type Album {\n    name: String!\n    img: String!\n    type: String!\n    release: Release!\n  }\n  \n  type Query {\n    albums: [Album]!\n    songs(album: String!): [Song]\n    song(youtubeID: String!): Song\n  }\n  ";

exports.default = typeDefs;