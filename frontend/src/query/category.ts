import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id, name, startDate, tasks {
        id
      }
    }
  }
`
