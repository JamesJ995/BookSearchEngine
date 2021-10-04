const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID!
    authors: String
    description: String
    bookId: String!
    image: String
    title: String!
    link: String
  }

  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

`;

module.exports = typeDefs;
