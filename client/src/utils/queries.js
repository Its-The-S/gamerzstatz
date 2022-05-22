import { gql } from "@apollo/client";

// graphql architecture for reading a user's info stored in mongoDB
export const QUERY_USER = gql`
    {
        user {
            _id
            firstName
            lastName
            gamertag
        }
    }
`;
