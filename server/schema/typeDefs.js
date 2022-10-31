const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [Books]
  }
  type Book {
    authors: String
    description: String!
    bookId: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: [User]
    books:[Book]
  }

  input savedBooks{
      book: [authors]
      bookId:Sting!
      description: String!
      image: String
      link: String
  }
  type Mutation {
    login(email: string, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook:(input:savedBooks):User
    removeBook(bookId: String!):User
  }
`;

module.exports = typeDefs;
