const { gql } = require("apollo-server-express");

// queries and mutations structure for graphql
const typeDefs = gql`
    type User {
        _id: ID
        firstName: String
        lastName: String
        gamertag: String
        email: String
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        user: User
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, gamertag: String!, email: String!, password: String!): Auth
        updateUser(firstName: String, lastName: String, email: String, password: String): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;
