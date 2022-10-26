import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PrismaService } from '../helper/prisma.service';
import { User } from '../models/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @Mutation(() => User)
  async createUser(
    @Args('name', { type: () => String, nullable: false }) name: string
  ) {
    return this.prisma.user.create({
      data: {
        name,
      },
    });
  }
}
