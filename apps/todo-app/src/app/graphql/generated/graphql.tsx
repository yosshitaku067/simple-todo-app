import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Activity = {
  __typename?: 'Activity';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  text: Scalars['String'];
  todo: Todo;
  todoId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity: Activity;
  createProject: Project;
};

export type MutationCreateActivityArgs = {
  text: Scalars['String'];
  todoId: Scalars['Int'];
};

export type MutationCreateProjectArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  allProjects: Array<Project>;
};

/** Todo Status */
export enum Status {
  Closed = 'CLOSED',
  Completed = 'COMPLETED',
  Open = 'OPEN',
}

export type Todo = {
  __typename?: 'Todo';
  activities: Array<Activity>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  progress: Scalars['Float'];
  project: Todo;
  projectId: Scalars['Float'];
  status: Status;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  todo: Array<Todo>;
  updatedAt: Scalars['DateTime'];
};

export type AllProjectsQueryVariables = Exact<{ [key: string]: never }>;

export type AllProjectsQuery = {
  __typename?: 'Query';
  allProjects: Array<{
    __typename?: 'Project';
    id: string;
    name: string;
    description: string;
    updatedAt: any;
    createdAt: any;
  }>;
};

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;

export type CreateProjectMutation = {
  __typename?: 'Mutation';
  createProject: {
    __typename?: 'Project';
    id: string;
    name: string;
    description: string;
    updatedAt: any;
    createdAt: any;
  };
};

export const AllProjectsDocument = gql`
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

/**
 * __useAllProjectsQuery__
 *
 * To run a query within a React component, call `useAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    AllProjectsQuery,
    AllProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProjectsQuery, AllProjectsQueryVariables>(
    AllProjectsDocument,
    options
  );
}
export function useAllProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AllProjectsQuery,
    AllProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProjectsQuery, AllProjectsQueryVariables>(
    AllProjectsDocument,
    options
  );
}
export type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export type AllProjectsLazyQueryHookResult = ReturnType<
  typeof useAllProjectsLazyQuery
>;
export type AllProjectsQueryResult = Apollo.QueryResult<
  AllProjectsQuery,
  AllProjectsQueryVariables
>;
export const CreateProjectDocument = gql`
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
export type CreateProjectMutationFn = Apollo.MutationFunction<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateProjectMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateProjectMutation,
    CreateProjectMutationVariables
  >(CreateProjectDocument, options);
}
export type CreateProjectMutationHookResult = ReturnType<
  typeof useCreateProjectMutation
>;
export type CreateProjectMutationResult =
  Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<
  CreateProjectMutation,
  CreateProjectMutationVariables
>;
