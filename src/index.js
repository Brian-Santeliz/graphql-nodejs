const { ApolloServer, gql } = require("apollo-server");
const Books = require("./database/model");
const startDatabase = require("./database/connection");

const typeDefs = gql`
  type Book {
    id: ID!
    name: String!
    year: String!
    author: String!
  }
  type Query {
    getBooks: [Book]
    getBookId(id: ID!): Book
  }
  type Mutation {
    createBook(name: String!, year: String!, author: String!): Book!
  }
`;
const resolvers = {
  Query: {
    getBooks: async () => {
      return await Books.find();
    },
    getBookId: async (_, { id }) => {
      return await Books.findById({ _id: id });
    },
  },
  Mutation: {
    createBook: async (parent, args, context, info) => {
      const { name, year, author } = args;
      const book = new Books({
        name,
        year,
        author,
      });
      return await book.save();
    },
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
