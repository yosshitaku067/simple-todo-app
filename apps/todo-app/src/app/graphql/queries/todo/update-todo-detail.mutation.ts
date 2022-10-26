import { gql } from '@apollo/client';

export default gql`
  mutation updateTodoDetail($id: Int!, $progress: Float!, $status: Status!) {
    updateTodoDetail(id: $id, progress: $progress, status: $status) {
      id
      name
      updatedAt
      createdAt
    }
  }
`;
