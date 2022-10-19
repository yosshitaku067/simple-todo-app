import dayjs from 'dayjs';
import { DAYJS_FORMAT } from '../app/helper/dayjs-format';
import { TodoStatus } from '../app/models';
import uniqueNumberId from './unique-number-id';

export const PROJECTS = [
  {
    id: uniqueNumberId(),
    name: 'Project 1',
    description: 'Project Overview Description aaaaaaaaaaaa',
    updatedAt: dayjs().format(DAYJS_FORMAT),
    createdAt: dayjs().format(DAYJS_FORMAT),
    counts: {
      open: 3,
      closed: 4,
      completed: 7,
    },
    todos: [
      {
        id: uniqueNumberId(),
        name: 'todo1',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 60,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo2',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 30,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo3',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 80,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
    ],
  },
  {
    id: uniqueNumberId(),
    name: 'Project 2',
    description: 'Project Overview Description aaaaaaaaaaaa',
    updatedAt: dayjs().format(DAYJS_FORMAT),
    createdAt: dayjs().format(DAYJS_FORMAT),
    counts: {
      open: 3,
      closed: 4,
      completed: 7,
    },
    todos: [
      {
        id: uniqueNumberId(),
        name: 'todo1',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 20,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo2',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 40,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo3',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 90,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
    ],
  },
  {
    id: uniqueNumberId(),
    name: 'Project 3',
    description: 'Project Overview Description aaaaaaaaaaaa',
    updatedAt: dayjs().format(DAYJS_FORMAT),
    createdAt: dayjs().format(DAYJS_FORMAT),
    counts: {
      open: 3,
      closed: 4,
      completed: 7,
    },
    todos: [
      {
        id: uniqueNumberId(),
        name: 'todo1',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 10,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo2',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 100,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
      {
        id: uniqueNumberId(),
        name: 'todo3',
        descriptions: [
          {
            id: uniqueNumberId(),
            text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
          {
            id: uniqueNumberId(),
            text: 'cccccccccccccccccccccccccccccccccccccccccccccc',
            updatedAt: dayjs().format(DAYJS_FORMAT),
            createdAt: dayjs().format(DAYJS_FORMAT),
          },
        ],
        progress: 30,
        updatedAt: dayjs().format(DAYJS_FORMAT),
        createdAt: dayjs().format(DAYJS_FORMAT),
        user: {
          name: 'よしたく',
        },
        status: 'OPEN' as TodoStatus,
      },
    ],
  },
];
