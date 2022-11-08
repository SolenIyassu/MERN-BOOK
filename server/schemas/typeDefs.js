const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String
    email: String
    password: String
    savedBooks: [Book]
    _id: ID
    bookCount: Int
  }
  type Book {
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: [User]
    books: [Book]
  }

  # input saveBook{
  #     book: [authors]
  #     bookId:Sting
  #     description: String
  #     image: String
  #     link: String
  #     authors:[String]
  # }
  type Mutation {
    login(email: String!, password: String!, username: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      bookId: String!
      authors: [String!]
      title: String!
      description: String!
      image: String
      link: String
    ): User
    removeBook(bookId: String): User
  }
`;

module.exports = typeDefs;
