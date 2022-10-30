import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Activity } from './activity.model';
import { Status } from './enums/status.enum';
import { Project } from './project.model';
// import { User } from './user.model';

@ObjectType('Todo')
export class Todo {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  name: string;

  @Field(() => [Activity], { nullable: false })
  activities: Activity[];

  @Field(() => Number)
  progress: number;

  @Field(() => Date, { nullable: false })
  updatedAt: Date;

  @Field(() => Date, { nullable: false })
  createdAt: Date;

  @Field(() => Number, { nullable: false })
  userId: number;

  // @Field(() => User, { nullable: false })
  // user: User;

  @Field(() => Status, { nullable: false })
  status: Status;

  @Field(() => Number, { nullable: false })
  projectId: number;

  @Field(() => Todo, { nullable: false })
  project: Project;
}
