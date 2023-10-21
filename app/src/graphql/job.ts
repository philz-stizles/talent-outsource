import { gql } from '@apollo/client';

export const GET_JOBS = gql`
  query GetJobs {
    jobs {
      id
      name
      description
      photo
    }
  }
`;

export const GET_JOB = gql`
  query GetJob($id: String) {
    job(id: $id) {
      id
      name
      description
      photo
    }
  }
`;

export const CREATE_JOB = gql`
  mutation CreateJob($title: String, $description: String) {
    createJob(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;

export const DELETE_JOB = gql`
  mutation DeleteJob($id: String) {
    deleteJob(id: $id) {
      id
      title
      description
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJob($title: String, $description: String) {
    updateJob(title: $title, description: $description) {
      id
      title
      description
    }
  }
`;
