import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { User } from '../../entities/user.entity';
import { UserRepository } from '../users.repository';
import { CreateUserData } from '../data/create-user.data';
import { UpdateUserData } from '../data/update-user.data';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserData): Promise<User> {
    const prismaUser = await this.prisma.client.user.create({ data });
    return new User(prismaUser);
  }

  async findAll(): Promise<User[]> {
    const prismaUsers = await this.prisma.client.user.findMany();
    return prismaUsers.map((prismaUser) => new User(prismaUser));
  }

  async findOne(id: number): Promise<User | null> {
    const prismaUser = await this.prisma.client.user.findUnique({ where: { id } });
    return prismaUser ? new User(prismaUser) : null;
  }

  async update(id: number, data: UpdateUserData): Promise<User> {
    const prismaUser = await this.prisma.client.user.update({ where: { id }, data });
    return new User(prismaUser);
  }

  async remove(id: number): Promise<void> {
    await this.prisma.client.user.delete({ where: { id } });
  }
}
