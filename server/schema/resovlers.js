const { AuthenticationError } = require("apollo-sever-express");
const { saveBook } = require("../controllers/user-controller");
const { User, Book } = require("../models");
const signToken = (require = require("./utils/auth"));

const resolvers = {
  Query: {
    me: async (parent, { user, token }, context) => {
      if (context.user) {
        return User.findOne({ _id: context._id }).populate("books");
      }
      throw new AuthenticationError("You need to login!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ name, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("No user found!");
      }
      const correctPassword = await User.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Password is incorrect");
      }
      const token = signToken(user);
      return { token, user };
    },
    savedBook: (parent, args) => {
      const books = args.input;
      const lastBookId = Book[Book.length - 1].id;
      bookId = lastBookId + 1;
      Book.push(book);
    },
    removeBook: async (parent, args, context) => {
      if (context.user) {
        return Book.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },
};

module.exports = resolvers;
