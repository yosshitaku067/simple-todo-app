import dayjs from 'dayjs';
import { Literal, Number, Record, Static, String } from 'runtypes';
import { DAYJS_FORMAT } from '../helper/dayjs-format';

export const ActivitySchema = Record({
  __typename: Literal('Activity'),
  id: Number,
  text: String,
  updatedAt: String,
  createdAt: String,
});

export type Activity = {
  id: number;
  text: string;
  updatedAt: string;
  createdAt: string;
};

export const toActivityModel = (
  data: Static<typeof ActivitySchema>
): Activity => {
  return {
    id: data.id,
    text: data.text,
    updatedAt: dayjs(data.updatedAt).format(DAYJS_FORMAT),
    createdAt: dayjs(data.createdAt).format(DAYJS_FORMAT),
  };
};
