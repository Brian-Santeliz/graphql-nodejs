const { gql } = require("apollo-server");
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
module.exports = typeDefs;
