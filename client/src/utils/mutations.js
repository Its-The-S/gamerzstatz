import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
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
    mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $gamertag: String!) {
        addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, gamertag: $gamertag) {
            user {
                _id
                gamertag
                lastName
                firstName
            }
        }
    }
`;
