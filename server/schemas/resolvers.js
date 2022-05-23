const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        // gets user's account data
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);

                return user;
            }

            throw new AuthenticationError("Not logged in");
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError("Not logged in");
        },
        // handles user login
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            // checks if database contains input email
            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }
            // checks if password matches input email's password
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }
            // assigns auth token
            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;
