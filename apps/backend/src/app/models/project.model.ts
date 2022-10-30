import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Todo } from './todo.model';

@ObjectType('TodoCount')
class TodoCount {
  @Field(() => Number, { nullable: false })
  open: number;

  @Field(() => Number, { nullable: false })
  closed: number;

  @Field(() => Number, { nullable: false })
  completed: number;
}

@ObjectType('Project')
export class Project {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => String, { nullable: false })
  description: string;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => [Todo], { nullable: false })
  todo: Todo[];

  @Field(() => TodoCount, { nullable: false })
  counts: TodoCount;
}
