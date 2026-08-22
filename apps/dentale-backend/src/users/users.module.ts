import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { USER_REPOSITORY } from './repositories/users.repository';
import { PrismaUserRepository } from './repositories/implementations/users.repository.prisma';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: USER_REPOSITORY, useClass: PrismaUserRepository },
  ],
})
export class UsersModule {}
