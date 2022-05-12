const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        // /account
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);

                return user;
            }

            throw new AuthenticationError("Not logged in");
        },
        // /friends
        // user's friends

        // /achievements
        // user's games/basic achievements

        // /achievements/title/:titleID
        // user's single game deeper achievements

        // /achievements/player/:xuid/title/:titleID
        // friend's single game deeper achievements
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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }

            const token = signToken(user);

            return { token, user };
        },
    },
};

module.exports = resolvers;
