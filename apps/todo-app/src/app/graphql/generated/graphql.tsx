import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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
  id: Scalars['Int'];
  text: Scalars['String'];
  todo: Todo;
  todoId: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createActivity: Activity;
  createProject: Project;
  createTodo: Todo;
  updateActivity: Activity;
  updateProjectDescription: Project;
  updateProjectName: Project;
  updateTodoDetail: Todo;
  updateTodoName: Todo;
};


export type MutationCreateActivityArgs = {
  text: Scalars['String'];
  todoId: Scalars['Int'];
};


export type MutationCreateProjectArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationCreateTodoArgs = {
  name: Scalars['String'];
  projectId: Scalars['Int'];
};


export type MutationUpdateActivityArgs = {
  id: Scalars['Int'];
  text: Scalars['String'];
};


export type MutationUpdateProjectDescriptionArgs = {
  description: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationUpdateProjectNameArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
};


export type MutationUpdateTodoDetailArgs = {
  id: Scalars['Int'];
  progress: Scalars['Float'];
  status: Status;
};


export type MutationUpdateTodoNameArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  counts: TodoCount;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  todo: Array<Todo>;
  updatedAt: Scalars['DateTime'];
};

export type Query = {
  __typename?: 'Query';
  allProjects: Array<Project>;
  allTodos: Array<Todo>;
};

/** Todo Status */
export enum Status {
  Closed = 'CLOSED',
  Completed = 'COMPLETED',
  Open = 'OPEN'
}

export type Todo = {
  __typename?: 'Todo';
  activities: Array<Activity>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  progress: Scalars['Float'];
  project: Todo;
  projectId: Scalars['Float'];
  status: Status;
  updatedAt: Scalars['DateTime'];
  userId: Scalars['Float'];
};

export type TodoCount = {
  __typename?: 'TodoCount';
  closed: Scalars['Float'];
  completed: Scalars['Float'];
  open: Scalars['Float'];
};

export type CreateActivityMutationVariables = Exact<{
  todoId: Scalars['Int'];
  text: Scalars['String'];
}>;


export type CreateActivityMutation = { __typename?: 'Mutation', createActivity: { __typename?: 'Activity', id: number, text: string, todoId: number, updatedAt: any, createdAt: any } };

export type UpdateActivityMutationVariables = Exact<{
  id: Scalars['Int'];
  text: Scalars['String'];
}>;


export type UpdateActivityMutation = { __typename?: 'Mutation', updateActivity: { __typename?: 'Activity', id: number, text: string, todoId: number, updatedAt: any, createdAt: any } };

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllProjectsQuery = { __typename?: 'Query', allProjects: Array<{ __typename?: 'Project', id: number, name: string, description: string, updatedAt: any, createdAt: any, todo: Array<{ __typename?: 'Todo', id: number, name: string, progress: number, status: Status, updatedAt: any, createdAt: any, activities: Array<{ __typename?: 'Activity', id: number, text: string, updatedAt: any, createdAt: any }> }> }> };

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
  description?: InputMaybe<Scalars['String']>;
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: number, name: string, description: string, updatedAt: any, createdAt: any } };

export type UpdateProjectDescriptionMutationVariables = Exact<{
  id: Scalars['Int'];
  description: Scalars['String'];
}>;


export type UpdateProjectDescriptionMutation = { __typename?: 'Mutation', updateProjectDescription: { __typename?: 'Project', id: number, name: string, description: string, updatedAt: any, createdAt: any } };

export type UpdateProjectNameMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type UpdateProjectNameMutation = { __typename?: 'Mutation', updateProjectName: { __typename?: 'Project', id: number, name: string, description: string, updatedAt: any, createdAt: any } };

export type CreateTodoMutationVariables = Exact<{
  name: Scalars['String'];
  projectId: Scalars['Int'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'Todo', id: number, name: string, updatedAt: any, createdAt: any } };

export type UpdateTodoDetailMutationVariables = Exact<{
  id: Scalars['Int'];
  progress: Scalars['Float'];
  status: Status;
}>;


export type UpdateTodoDetailMutation = { __typename?: 'Mutation', updateTodoDetail: { __typename?: 'Todo', id: number, name: string, updatedAt: any, createdAt: any } };

export type UpdateTodoNameMutationVariables = Exact<{
  id: Scalars['Int'];
  name: Scalars['String'];
}>;


export type UpdateTodoNameMutation = { __typename?: 'Mutation', updateTodoName: { __typename?: 'Todo', id: number, name: string, updatedAt: any, createdAt: any } };


export const CreateActivityDocument = gql`
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
export type CreateActivityMutationFn = Apollo.MutationFunction<CreateActivityMutation, CreateActivityMutationVariables>;

/**
 * __useCreateActivityMutation__
 *
 * To run a mutation, you first call `useCreateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActivityMutation, { data, loading, error }] = useCreateActivityMutation({
 *   variables: {
 *      todoId: // value for 'todoId'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useCreateActivityMutation(baseOptions?: Apollo.MutationHookOptions<CreateActivityMutation, CreateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateActivityMutation, CreateActivityMutationVariables>(CreateActivityDocument, options);
      }
export type CreateActivityMutationHookResult = ReturnType<typeof useCreateActivityMutation>;
export type CreateActivityMutationResult = Apollo.MutationResult<CreateActivityMutation>;
export type CreateActivityMutationOptions = Apollo.BaseMutationOptions<CreateActivityMutation, CreateActivityMutationVariables>;
export const UpdateActivityDocument = gql`
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
export type UpdateActivityMutationFn = Apollo.MutationFunction<UpdateActivityMutation, UpdateActivityMutationVariables>;

/**
 * __useUpdateActivityMutation__
 *
 * To run a mutation, you first call `useUpdateActivityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateActivityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateActivityMutation, { data, loading, error }] = useUpdateActivityMutation({
 *   variables: {
 *      id: // value for 'id'
 *      text: // value for 'text'
 *   },
 * });
 */
export function useUpdateActivityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateActivityMutation, UpdateActivityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateActivityMutation, UpdateActivityMutationVariables>(UpdateActivityDocument, options);
      }
export type UpdateActivityMutationHookResult = ReturnType<typeof useUpdateActivityMutation>;
export type UpdateActivityMutationResult = Apollo.MutationResult<UpdateActivityMutation>;
export type UpdateActivityMutationOptions = Apollo.BaseMutationOptions<UpdateActivityMutation, UpdateActivityMutationVariables>;
export const AllProjectsDocument = gql`
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
export function useAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
      }
export function useAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
        }
export type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export type AllProjectsLazyQueryHookResult = ReturnType<typeof useAllProjectsLazyQuery>;
export type AllProjectsQueryResult = Apollo.QueryResult<AllProjectsQuery, AllProjectsQueryVariables>;
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
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

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
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const UpdateProjectDescriptionDocument = gql`
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
export type UpdateProjectDescriptionMutationFn = Apollo.MutationFunction<UpdateProjectDescriptionMutation, UpdateProjectDescriptionMutationVariables>;

/**
 * __useUpdateProjectDescriptionMutation__
 *
 * To run a mutation, you first call `useUpdateProjectDescriptionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectDescriptionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectDescriptionMutation, { data, loading, error }] = useUpdateProjectDescriptionMutation({
 *   variables: {
 *      id: // value for 'id'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateProjectDescriptionMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectDescriptionMutation, UpdateProjectDescriptionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectDescriptionMutation, UpdateProjectDescriptionMutationVariables>(UpdateProjectDescriptionDocument, options);
      }
export type UpdateProjectDescriptionMutationHookResult = ReturnType<typeof useUpdateProjectDescriptionMutation>;
export type UpdateProjectDescriptionMutationResult = Apollo.MutationResult<UpdateProjectDescriptionMutation>;
export type UpdateProjectDescriptionMutationOptions = Apollo.BaseMutationOptions<UpdateProjectDescriptionMutation, UpdateProjectDescriptionMutationVariables>;
export const UpdateProjectNameDocument = gql`
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
export type UpdateProjectNameMutationFn = Apollo.MutationFunction<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>;

/**
 * __useUpdateProjectNameMutation__
 *
 * To run a mutation, you first call `useUpdateProjectNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProjectNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProjectNameMutation, { data, loading, error }] = useUpdateProjectNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateProjectNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>(UpdateProjectNameDocument, options);
      }
export type UpdateProjectNameMutationHookResult = ReturnType<typeof useUpdateProjectNameMutation>;
export type UpdateProjectNameMutationResult = Apollo.MutationResult<UpdateProjectNameMutation>;
export type UpdateProjectNameMutationOptions = Apollo.BaseMutationOptions<UpdateProjectNameMutation, UpdateProjectNameMutationVariables>;
export const CreateTodoDocument = gql`
    mutation createTodo($name: String!, $projectId: Int!) {
  createTodo(name: $name, projectId: $projectId) {
    id
    name
    updatedAt
    createdAt
  }
}
    `;
export type CreateTodoMutationFn = Apollo.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      name: // value for 'name'
 *      projectId: // value for 'projectId'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: Apollo.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, options);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const UpdateTodoDetailDocument = gql`
    mutation updateTodoDetail($id: Int!, $progress: Float!, $status: Status!) {
  updateTodoDetail(id: $id, progress: $progress, status: $status) {
    id
    name
    updatedAt
    createdAt
  }
}
    `;
export type UpdateTodoDetailMutationFn = Apollo.MutationFunction<UpdateTodoDetailMutation, UpdateTodoDetailMutationVariables>;

/**
 * __useUpdateTodoDetailMutation__
 *
 * To run a mutation, you first call `useUpdateTodoDetailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoDetailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoDetailMutation, { data, loading, error }] = useUpdateTodoDetailMutation({
 *   variables: {
 *      id: // value for 'id'
 *      progress: // value for 'progress'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateTodoDetailMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoDetailMutation, UpdateTodoDetailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoDetailMutation, UpdateTodoDetailMutationVariables>(UpdateTodoDetailDocument, options);
      }
export type UpdateTodoDetailMutationHookResult = ReturnType<typeof useUpdateTodoDetailMutation>;
export type UpdateTodoDetailMutationResult = Apollo.MutationResult<UpdateTodoDetailMutation>;
export type UpdateTodoDetailMutationOptions = Apollo.BaseMutationOptions<UpdateTodoDetailMutation, UpdateTodoDetailMutationVariables>;
export const UpdateTodoNameDocument = gql`
    mutation updateTodoName($id: Int!, $name: String!) {
  updateTodoName(id: $id, name: $name) {
    id
    name
    updatedAt
    createdAt
  }
}
    `;
export type UpdateTodoNameMutationFn = Apollo.MutationFunction<UpdateTodoNameMutation, UpdateTodoNameMutationVariables>;

/**
 * __useUpdateTodoNameMutation__
 *
 * To run a mutation, you first call `useUpdateTodoNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoNameMutation, { data, loading, error }] = useUpdateTodoNameMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateTodoNameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTodoNameMutation, UpdateTodoNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTodoNameMutation, UpdateTodoNameMutationVariables>(UpdateTodoNameDocument, options);
      }
export type UpdateTodoNameMutationHookResult = ReturnType<typeof useUpdateTodoNameMutation>;
export type UpdateTodoNameMutationResult = Apollo.MutationResult<UpdateTodoNameMutation>;
export type UpdateTodoNameMutationOptions = Apollo.BaseMutationOptions<UpdateTodoNameMutation, UpdateTodoNameMutationVariables>;