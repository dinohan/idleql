"use strict";

var _graphqlYoga = require("graphql-yoga");

var _resolvers = require("./graphql/resolvers");

var _resolvers2 = _interopRequireDefault(_resolvers);

var _typeDefs = require("./graphql/typeDefs");

var _typeDefs2 = _interopRequireDefault(_typeDefs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// for lambda!!
var lambda = new _graphqlYoga.GraphQLServerLambda({
  typeDefs: _typeDefs2.default,
  resolvers: _resolvers2.default
});

exports.handler = lambda.graphqlHandler;

// for server
var server = new _graphqlYoga.GraphQLServer({
  typeDefs: _typeDefs2.default,
  resolvers: _resolvers2.default
});

server.start(function () {
  return console.log("Graphql Server Running");
});