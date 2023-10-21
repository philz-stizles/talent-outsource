import { gql } from '@apollo/client';

export const GET_TECH_STACKS = gql`
  query TechStacks {
    techStacks {
      id
      name
      description
      isPublished
      createdAt
    }
  }
`;

export const GET_TECH_STACK = gql`
  query GetJob($id: String) {
    job(id: $id) {
      id
      name
      description
      photo
    }
  }
`;

export const CREATE_TECH_STACK = gql`
  mutation CreateTechStack($data: CreateTechStackInput) {
    createTechStack(data: $data) {
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

export const DELETE_TECH_STACK = gql`
  mutation DeleteJob($id: String) {
    deleteJob(id: $id) {
      id
      title
      description
    }
  }
`;

export const UPDATE_TECH_STACK = gql`
  mutation UpdateJob($title: String, $description: String) {
    updateJob(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
