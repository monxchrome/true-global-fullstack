import { gql } from '@apollo/client';

export const GET_ALL_TASKS = gql`
  query {
    getAllTasks {
      id
      name
      startDate
      endDate
    }
  }
`;
