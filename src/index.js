const { ApolloServer, gql } = require("apollo-server");
const startDatabase = require("./database/connection");
const books = [
  {
    id: 1,
    name: "Harry poter y la pieda filosofal",
    year: 2020,
    author: "JK Rowling",
  },
  {
    id: 2,
    name: "El Alquimista",
    year: 1981,
    author: "Paul Cohelo",
  },
  {
    id: 3,
    name: "The art of war",
    year: 1970,
    author: "Anonimo",
  },
  {
    id: 4,
    name: "The Secret",
    year: 2011,
    author: "Guewl",
  },
];
const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    year: String!
    author: String!
  }
  type Query {
    getBooks: [Book]
  }
`;
const resolvers = {
  Query: {
    getBooks: () => books,
  },
};
const endpoint = new ApolloServer({
  typeDefs,
  resolvers,
});
startDatabase();
endpoint
  .listen()
  .then(({ url }) => console.log(`Servidor en el puerto: ${url}`))
  .catch((e) => console.log(`Servidor en el puerto: ${e}`));
