const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    name: String!
  }

  type User {
    _id: ID!
    name: String!
    

  }

  type Query {
    books: [Book]
    users(_id: String): [User]
  }

  type Mutation {
    createBook(_id: String!, name: String!): Book
    createUser(_id: String!, name: String!): User
  }
`;

module.exports = typeDefs;
