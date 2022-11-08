const { AuthenticationError } = require("apollo-server-express");
const { User, Book } = require("../models");
const signToken = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context._id });
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
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError("Password is incorrect");
      }
      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, args, context) => {
      if (context.user) {
        const update = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { saveBook: bookId } },
          { new: true }
        );
        return update;
      }
      throw new AuthenticationError("please login first!");
    },
    removeBook: async (parent, args, context) => {
      if (context.user) {
        const update = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { saveBook: { bookId } } },
          { new: true }
        );
        if (!update) {
          console.log("no user found!");
        }
        return update;
      }
      throw new AuthenticationError("You must be logged in!");
    },
  },
};

module.exports = resolvers;
