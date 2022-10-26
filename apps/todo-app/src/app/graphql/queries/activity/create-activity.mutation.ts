import { gql } from '@apollo/client';

export default gql`
  mutation createActivity($todoId: Int!, $text: String!) {
    createActivity(todoId: $todoId, text: $text) {
      id
      text
      todoId
      updatedAt
      createdAt
    }
  }
`;
