"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require("./db");

var resolvers = {
  Query: {
    albums: function albums() {
      return _db.albums;
    },
    song: function song(__, args) {
      return (0, _db.getSong)(args.youtubeID);
    },
    songs: function songs(__, args) {
      return (0, _db.getSongs)(args.album);
    }
  }
};

exports.default = resolvers;