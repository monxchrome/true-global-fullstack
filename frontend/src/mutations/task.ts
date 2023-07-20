import { gql } from "@apollo/client";

export const CREATE_TASK = gql`
  mutation CreateTask($name: String!, $endDate: DateTime!, $description: String!, $categoryId: String!) {
    createTask(createTaskInput: { name: $name, endDate: $endDate, description: $description }, categoryId: $categoryId) {
      id
      name
      description
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation UpdateTask($taskId: String!, $name: String!, $endDate: DateTime, $description: String!) {
    updateTask(updateTaskInput: { name: $name, endDate: $endDate, description: $description }, taskId: $taskId) {
      id
      name
      description
      endDate
    }
  }
`;

export const DELETE_TASK = gql`
  mutation DeleteTask($taskId: String!) {
    deleteTask(taskId: $taskId) {
      id
    }
  }
`;
