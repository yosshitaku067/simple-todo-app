export type Todo = {
  id: number;
  name: string;
  descriptions: {
    id: number;
    text: string;
    updatedAt: string;
    createdAt: string;
  }[];
  progress: number;
  updatedAt: string;
  createdAt: string;
  user: {
    name: string;
  };
  status: TodoStatus;
};

export type TodoStatus = 'OPEN' | 'COMPLETED' | 'CLOSED';
