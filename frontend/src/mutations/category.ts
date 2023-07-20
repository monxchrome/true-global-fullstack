import { gql } from '@apollo/client';

export const UPDATE_CATEGORY = gql`
  mutation UpdateCategory(
    $categoryId: String!
    $name: String!
    $startDate: DateTime
  ) {
    updateCategory(
      updateCategoryInput: { name: $name, startDate: $startDate }
      categoryId: $categoryId
    ) {
      id
      name
      startDate
    }
  }
`;

export const CREATE_CATEGORY = gql`
  mutation CreateCategory($name: String!) {
    createCategory(createCategoryInput: { name: $name }) {
      id
      name
      startDate
    }
  }
`;

export const DELETE_CATEGORY = gql`
  mutation DeleteCategory($categoryId: String!) {
    deleteCategory(categoryId: $categoryId) {
      id
    }
  }
`;
