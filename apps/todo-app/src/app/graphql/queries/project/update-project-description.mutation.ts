import { gql } from '@apollo/client';

export default gql`
  mutation updateProjectDescription($id: Int!, $description: String!) {
    updateProjectDescription(id: $id, description: $description) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;
