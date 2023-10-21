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
  query GetJob {
    job {
      id
      name
      description
      photo
    }
  }
`;


export const CREATE_JOB = gql`
  mutation CreateJob {
    createJob() {
      id
      title
      description
    }
  }
`;

export const DELETE_JOB = gql`
  mutation DeleteJob {
    deleteJob() {
      id
      title
      description
    }
  }
`;

export const UPDATE_JOB = gql`
  mutation UpdateJob {
    updateJob() {
      id
      title
      description
    }
  }
`;