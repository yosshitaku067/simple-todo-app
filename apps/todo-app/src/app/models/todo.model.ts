import dayjs from 'dayjs';
import {
  Array,
  Literal,
  Number,
  Record,
  Static,
  String,
  Union,
} from 'runtypes';
import { DAYJS_FORMAT } from '../helper/dayjs-format';
import { ActivitySchema, toActivityModel } from './activity.model';
import { toUserModel, UserSchema } from './user.model';

export const TodoSchema = Record({
  __typename: Literal('Todo'),
  id: Number,
  name: String,
  progress: Number,
  status: Union(Literal('OPEN'), Literal('CLOSED'), Literal('COMPLETED')),
  updatedAt: String,
  createdAt: String,
  user: UserSchema,
  activities: Array(ActivitySchema),
});

export const toTodoModel = (data: Static<typeof TodoSchema>): Todo => {
  return {
    id: data.id,
    name: data.name,
    updatedAt: dayjs(data.updatedAt).format(DAYJS_FORMAT),
    createdAt: dayjs(data.createdAt).format(DAYJS_FORMAT),
    activities: data.activities.map(toActivityModel),
    progress: data.progress,
    status: data.status,
    user: toUserModel(data.user),
  };
};

export type Todo = {
  id: number;
  name: string;
  activities: {
    id: number;
    text: string;
    updatedAt: string;
    createdAt: string;
  }[];
  progress: number;
  updatedAt: string;
  createdAt: string;
  user: {
    id: number;
    name: string;
    updatedAt: string;
    createdAt: string;
  };
  status: TodoStatus;
};

export type TodoStatus = 'OPEN' | 'COMPLETED' | 'CLOSED';
