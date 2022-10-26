import { gql } from '@apollo/client';

export default gql`
  mutation createTodo($name: String!, $projectId: Int!) {
    createTodo(name: $name, projectId: $projectId) {
      id
      name
      updatedAt
      createdAt
    }
  }
`;
