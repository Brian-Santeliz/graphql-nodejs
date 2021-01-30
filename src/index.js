const { ApolloServer, gql } = require("apollo-server");
const books = [
  {
    id: 1,
    name: "Harry poter y la pieda filosofal",
    year: 2020,
    author: "JK Rowling",
  },
  {
    id: 1,
    name: "Harry poter y la pieda filosofal",
    year: 2020,
    author: "JK Rowling",
  },
  {
    id: 1,
    name: "Harry poter y la pieda filosofal",
    year: 2020,
    author: "JK Rowling",
  },
  {
    id: 1,
    name: "Harry poter y la pieda filosofal",
    year: 2020,
    author: "JK Rowling",
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

endpoint
  .listen()
  .then(({ url }) => console.log(`Servidor en el puerto: ${url}`))
  .catch((e) => console.log(`Servidor en el puerto: ${e}`));
