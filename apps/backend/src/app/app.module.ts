import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './helper/prisma.service';
import { ActivityResolver } from './resolvers/activity.resolver';
import { ProjectResolver } from './resolvers/project.resolver';
import { TodoResolver } from './resolvers/todo.resolver';
import { UserResolver } from './resolvers/user.resolver';

const mode = process.env['MODE'];
const isDevelopMode = mode !== 'staging' && mode !== 'production';

console.log(__dirname, process.cwd());

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: isDevelopMode,
      playground: isDevelopMode,
      sortSchema: true,
      useGlobalPrefix: true,
      autoSchemaFile: isDevelopMode
        ? join(process.cwd(), 'apps/backend/src/schema.gql')
        : join(__dirname, 'schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    ActivityResolver,
    ProjectResolver,
    TodoResolver,
    UserResolver,
  ],
})
export class AppModule {}
