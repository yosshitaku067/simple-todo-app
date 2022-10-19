import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Todo } from './todo.model';

@ObjectType()
export class Activity {
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  text: string;

  @Field(() => Number, { nullable: false })
  todoId: number;

  @Field(() => Todo, { nullable: false })
  todo: Todo;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
}
