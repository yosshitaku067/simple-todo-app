import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../helper/prisma.service';
import { Activity } from '../models/activity.model';

@Resolver(() => Activity)
export class ActivityResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => Activity)
  async createActivity(
    @Args('todoId', { type: () => Int, nullable: false }) todoId: number,
    @Args('text', { type: () => String, nullable: false }) text: string
  ) {
    return this.prisma.activity.create({
      data: {
        text,
        todoId,
      },
    });
  }

  @Mutation(() => Activity)
  async updateActivity(
    @Args('id', { type: () => Int, nullable: false }) id: number,
    @Args('text', { type: () => String, nullable: false }) text: string
  ) {
    return this.prisma.activity.update({
      where: {
        id,
      },
      data: {
        text,
      },
    });
  }
}
