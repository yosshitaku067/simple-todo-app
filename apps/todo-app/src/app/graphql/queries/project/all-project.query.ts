import { gql } from '@apollo/client';

export default gql`
  query allProjects {
    allProjects {
      id
      name
      description
      updatedAt
      createdAt
      todo {
        id
        name
        progress
        activities {
          id
          text
          updatedAt
          createdAt
        }
        status
        updatedAt
        createdAt
      }
    }
  }
`;
