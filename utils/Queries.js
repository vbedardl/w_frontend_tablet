import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query {
    users {
      id
      name
      unit {
        name
      }
    }
  }
`;
export const CREATE_PACKAGE = gql`
  mutation($id: ID!) {
    createPackage(owner: $id) {
      id
      pickedUp
      createdAt
    }
  }
`;
