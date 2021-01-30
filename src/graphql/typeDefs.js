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
  input BookInput {
    name: String!
    year: String!
    author: String!
    id:ID
  }
  type Mutation {
    createBook(input: BookInput!): Book!
    deleteBook(id: ID!): Book
    updateBook(input: BookInput!): Book!
  }
`;
module.exports = typeDefs;
