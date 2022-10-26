import { Args, Float, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../helper/prisma.service';
import { Status } from '../models/enums/status.enum';
import { Project } from '../models/project.model';
import { Todo } from '../models/todo.model';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private prisma: PrismaService) {}

  /**
   * すべてのTodo情報を返す
   */
  @Query(() => [Todo])
  async allTodos() {
    return this.prisma.todo.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });
  }

  /**
   * 新規でTodoを作成し、作成した情報を返す
   */
  @Mutation(() => Todo)
  async createTodo(
    @Args('name', { type: () => String, nullable: false }) name: string,
    @Args('projectId', { type: () => Int, nullable: false })
    projectId: number
  ) {
    return this.prisma.todo.create({
      data: {
        name,
        projectId,
        progress: 0,
        status: 'OPEN',
        userId: 1,
      },
    });
  }

  /**
   * Todo名の更新
   */
  @Mutation(() => Todo)
  async updateTodoName(
    @Args('id', { type: () => Int, nullable: false }) id: number,
    @Args('name', { type: () => String, nullable: false }) name: string
  ) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  @Mutation(() => Todo)
  async updateTodoDetail(
    @Args('id', { type: () => Int, nullable: false }) id: number,
    @Args('progress', { type: () => Float, nullable: false }) progress: number,
    @Args('status', { type: () => Status, nullable: false })
    status: Status
  ) {
    return this.prisma.todo.update({
      where: {
        id,
      },
      data: {
        status,
        progress,
      },
    });
  }
}
