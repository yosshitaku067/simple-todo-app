import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Todo } from './todo.model';

@ObjectType()
export class User {
  @Field(() => Int, { nullable: false })
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
