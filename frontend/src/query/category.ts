import { gql } from "@apollo/client";

export const GET_ALL_CATEGORIES = gql`
  query {
    getAllCategories {
      id, name, startDate
    }
  }
`

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!) {
    createCategory(createCategoryInput: { name: $name }) {
      id, name, startDate,
    }
  }
`;
