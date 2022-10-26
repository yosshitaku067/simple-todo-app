import { gql } from '@apollo/client';

export default gql`
  mutation updateTodoName($id: Int!, $name: String!) {
    updateTodoName(id: $id, name: $name) {
      id
      name
      updatedAt
      createdAt
    }
  }
`;
