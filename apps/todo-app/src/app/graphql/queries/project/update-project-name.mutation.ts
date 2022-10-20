import { gql } from '@apollo/client';

export default gql`
  mutation updateProjectName($id: Int!, $name: String!) {
    updateProjectName(id: $id, name: $name) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;
