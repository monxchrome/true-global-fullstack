import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(loginInput: {
      email: $email
      password: $password
    }) {
      access
      refresh
    }
  }
`

export const REGISTER_USER = gql`
  mutation Register($email: String!, $password: String!, $role: String!) {
    register(registerInput: {
      email: $email
      password: $password
      role: $role
    }) {
      id
      email
      role
    }
  }
`;
