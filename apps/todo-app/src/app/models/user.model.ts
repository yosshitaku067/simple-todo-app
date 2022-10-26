import dayjs from 'dayjs';
import { Literal, Number, Record, Static, String } from 'runtypes';
import { DAYJS_FORMAT } from '../helper/dayjs-format';

export const UserSchema = Record({
  __typename: Literal('User'),
  id: Number,
  name: String,
  updatedAt: String,
  createdAt: String,
});

export type User = {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
};

export const toUserModel = (data: Static<typeof UserSchema>): User => {
  return {
    id: data.id,
    name: data.name,
    updatedAt: dayjs(data.updatedAt).format(DAYJS_FORMAT),
    createdAt: dayjs(data.createdAt).format(DAYJS_FORMAT),
  };
};
