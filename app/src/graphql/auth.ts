import { gql } from '@apollo/client';

export const SIGN_UP = gql`
  mutation SignUp(
    $firstname: String!,
    $lastname: String!,
    $email: String!,
    $password: String!
  ) {
    signUp(
      firstname: $firstname,
      lastname: $lastname,
      email: $email,
      password: $password
    ) {
      firstname
      lastname
      email
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      firstname
      lastname
      email
    }
  }
`;
