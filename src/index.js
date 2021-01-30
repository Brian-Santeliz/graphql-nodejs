const { ApolloServer } = require("apollo-server");
const startDatabase = require("./database/connection");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const endpoint = new ApolloServer({
  typeDefs,
  resolvers,
});
startDatabase();
endpoint
  .listen()
  .then(({ url }) => console.log(`Servidor en el puerto: ${url}`))
  .catch((e) => console.log(`Servidor en el puerto: ${e}`));
