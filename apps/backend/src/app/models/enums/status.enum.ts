import { registerEnumType } from '@nestjs/graphql';

export enum Status {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
  COMPLETED = 'COMPLETED',
}

registerEnumType(Status, {
  name: 'Status',
  description: 'Todo Status',
});
