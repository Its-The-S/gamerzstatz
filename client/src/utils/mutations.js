import { gql } from "@apollo/client";

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

export const ADD_ORDER = gql`
    mutation addOrder($products: [ID]!) {
        addOrder(products: $products) {
            purchaseDate
            products {
                _id
                name
                description
                price
                quantity
                category {
                    name
                }
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation Mutation($firstName: String!, $lastName: String!, $gamertag: String!, $email: String!, $password: String!) {
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
