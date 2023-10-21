import { gql } from '@apollo/client';

export const GET_TECHNOLOGIES = gql`
  query GetTechnologies {
    technologies {
      id
      name
      description
      isPublished
      createdAt
    }
  }
`;

export const GET_TECHNOLOGY = gql`
  query GetTechnology($id: String) {
    technology(id: $id) {
      id
      name
      description
      photo
    }
  }
`;

export const CREATE_TECHNOLOGY = gql`
  mutation CreateTechnology($data: CreateTechnologyInput) {
    createTechnology(data: $data) {
      status
      message
      data {
        id
        name
        description
        isPublished
        createdAt
        updatedAt
        user
      }
    }
  }
`;

export const DELETE_TECHNOLOGY = gql`
  mutation DeleteTechnology($id: String) {
    deleteTechnology(id: $id) {
      id
      title
      description
    }
  }
`;

export const UPDATE_TECHNOLOGY = gql`
  mutation UpdateTechnology($title: String, $description: String) {
    updateTechnology(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
