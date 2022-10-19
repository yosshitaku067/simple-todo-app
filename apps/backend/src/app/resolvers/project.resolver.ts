import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../helper/prisma.service';
import { Project } from '../models/project.model';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [Project])
  async allProjects() {
    return this.prisma.project.findMany();
  }

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
}
