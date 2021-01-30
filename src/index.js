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
    getBooks: [Book]!
    getBookId(id: ID!): Book!
  }
  type Mutation {
    createBook(name: String!, year: String!, author: String!): Book!
    deleteBook(id: ID!): Book
    updateBook(name: String!, year: String!, author: String!, id: ID!): Book!
  }
`;
const resolvers = {
  Query: {
    getBooks: async () => {
      try {
        return await Books.find();
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
    getBookId: async (_, { id }) => {
      try {
        return await Books.findById({ _id: id });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
  },
  Mutation: {
    createBook: async (parent, args, context, info) => {
      const { name, year, author } = args;
      try {
        const book = new Books({
          name,
          year,
          author,
        });
        return await book.save();
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
    deleteBook: async (_, { id }) => {
      try {
        return await Books.findByIdAndRemove({ _id: id });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    },
    updateBook: async (_, { name, year, author, id }) => {
      return await Books.findByIdAndUpdate(
        { _id: id },
        {
          name,
          year,
          author,
        },
        {
          new: true,
        }
      );
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
