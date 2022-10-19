import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Todo } from './todo.model';

@ObjectType()
export class User {
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [Todo], { nullable: false })
  todo: Todo[];

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
