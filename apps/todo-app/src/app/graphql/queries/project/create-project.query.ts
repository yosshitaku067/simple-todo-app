import { gql } from '@apollo/client';

export default gql`
  mutation createProject($name: String!, $description: String) {
    createProject(name: $name, description: $description) {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;
