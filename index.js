const { ApolloServer } = require("apollo-server");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const dataSources = require("./dataSources");
const server = new ApolloServer({ typeDefs, resolvers, dataSources });

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`listening on ${url}...`);
});
