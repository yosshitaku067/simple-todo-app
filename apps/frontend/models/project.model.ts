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
