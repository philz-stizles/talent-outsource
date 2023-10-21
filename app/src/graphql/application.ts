import { gql } from '@apollo/client';

export const CREATE_APPLICATION = gql`
  mutation CreateApplication($jobId: String!) {
    createApplication(jobId: $jobId) {
      
    }
  }
`;
