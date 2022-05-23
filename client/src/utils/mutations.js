import { gql } from "@apollo/client";

// graphql architecture for user's login call
export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                firstName
                lastName
                gamertag
                email
            }
        }
    }
`;

// graphql architecture for a new user to be added to the mongoDB
export const ADD_USER = gql`
    mutation addUser($firstName: String!, $lastName: String!, $gamertag: String!, $email: String!, $password: String!) {
        addUser(firstName: $firstName, lastName: $lastName, gamertag: $gamertag, email: $email, password: $password) {
            token
            user {
                firstName
                lastName
                gamertag
                email
            }
        }
    }
`;
