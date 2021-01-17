import { GraphQLServer, GraphQLServerLambda } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

// for lambda
const lambda = new GraphQLServerLambda({
  typeDefs,
  resolvers,
});

exports.handler = lambda.graphqlHandler;

// for server
const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
