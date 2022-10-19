import { registerEnumType } from '@nestjs/graphql';

export enum Status {
  OPEN,
  CLOSED,
  COMPLETED,
}

registerEnumType(Status, {
  name: 'Status',
  description: 'Todo Status',
});
