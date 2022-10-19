import { gql } from '@apollo/client';

export default gql`
  query allProjects {
    allProjects {
      id
      name
      description
      updatedAt
      createdAt
    }
  }
`;
