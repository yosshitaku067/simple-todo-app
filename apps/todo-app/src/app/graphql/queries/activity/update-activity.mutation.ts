import { gql } from '@apollo/client';

export default gql`
  mutation updateActivity($id: Int!, $text: String!) {
    updateActivity(id: $id, text: $text) {
      id
      text
      todoId
      updatedAt
      createdAt
    }
  }
`;
