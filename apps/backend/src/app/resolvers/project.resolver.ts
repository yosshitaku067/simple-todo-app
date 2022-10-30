import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../helper/prisma.service';
import { Project } from '../models/project.model';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private prisma: PrismaService) {}

  /**
   * すべてのプロジェクト情報を返す
   */
  @Query(() => [Project])
  async allProjects() {
    return this.prisma.project.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        description: true,
        updatedAt: true,
        createdAt: true,
        todo: {
          select: {
            id: true,
            name: true,
            progress: true,
            activities: {
              select: {
                id: true,
                text: true,
                updatedAt: true,
                createdAt: true,
              },
            },
            status: true,
            updatedAt: true,
            createdAt: true,
          },
        },
      },
    });
  }

  /**
   * 新規でプロジェクトを作成し、作成したプロジェクト情報を返す
   */
  @Mutation(() => Project)
  async createProject(
    @Args('name', { type: () => String, nullable: false }) name: string,
    @Args('description', { type: () => String, defaultValue: '' })
    description: string
  ) {
    return this.prisma.project.create({
      data: {
        name,
        description,
      },
      select: {
        id: true,
        name: true,
        description: true,
        updatedAt: true,
        createdAt: true,
      },
    });
  }

  /**
   * プロジェクト名の更新
   */
  @Mutation(() => Project)
  async updateProjectName(
    @Args('id', { type: () => Int, nullable: false }) id: number,
    @Args('name', { type: () => String, nullable: false }) name: string
  ) {
    return this.prisma.project.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }

  /**
   * プロジェクトの概要を更新
   */
  @Mutation(() => Project)
  async updateProjectDescription(
    @Args('id', { type: () => Int, nullable: false }) id: number,
    @Args('description', { type: () => String, nullable: false })
    description: string
  ) {
    return this.prisma.project.update({
      where: {
        id,
      },
      data: {
        description,
      },
    });
  }
}
