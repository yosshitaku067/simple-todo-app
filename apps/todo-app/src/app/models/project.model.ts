import { Record, Array, Number, String, Literal, Static } from 'runtypes';
import { Todo } from './todo.model';

export type Project = {
  id: number;
  name: string;
  todos: Todo[];
  counts: {
    open: number;
    closed: number;
    completed: number;
  };
  updatedAt: string;
  createdAt: string;
  description: string;
};

const ProjectSchema = Record({
  __typename: Literal('Project'),
  id: Number,
  name: String,
  description: String,
  updatedAt: String,
  createdAt: String,
});

const AllProjectsSchema = Record({
  allProjects: Array(ProjectSchema),
});

export const toProjectModel = (data: Static<typeof ProjectSchema>): Project => {
  return {
    id: data.id,
    name: data.name,
    description: data.description,
    updatedAt: data.updatedAt,
    createdAt: data.createdAt,
    todos: [],
    counts: {
      open: 0,
      closed: 0,
      completed: 0,
    },
  };
};

export const allProjectToProjectModel = (data: unknown): Project[] => {
  if (AllProjectsSchema.guard(data)) {
    return data.allProjects.map((pjData) => {
      return toProjectModel(pjData);
    });
  }

  return [];
};