import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create/create-user-request.dto';
import { CreateUserResponseDto } from './dto/create/create-user-response.dto';
import { UpdateUserRequestDto } from './dto/update/update-user-request.dto';
import { UpdateUserResponseDto } from './dto/update/update-user-response.dto';
import { FindAllUsersResponseDto } from './dto/find-all/find-all-users-response.dto';
import { FindOneUserResponseDto } from './dto/find-one/find-one-user-response.dto';
import { USER_REPOSITORY } from './repositories/users.repository';
import type { UserRepository } from './repositories/users.repository';
import { UsersMapper } from './users.mapper';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly usersRepository: UserRepository,
  ) {}

  async create(
    createUserDto: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const createUserData = UsersMapper.toCreateData(createUserDto);
    const user = await this.usersRepository.create(createUserData);
    return UsersMapper.toCreateResponse(user);
  }

  async findAll(): Promise<FindAllUsersResponseDto[]> {
    const users = await this.usersRepository.findAll();
    return users.map((user) => UsersMapper.toFindAllResponse(user));
  }

  async findOne(id: number): Promise<FindOneUserResponseDto> {
    const user = await this.usersRepository.findOne(id);
    if (!user) throw new NotFoundException(`User #${id} not found`);
    return UsersMapper.toFindOneResponse(user);
  }

  async update(
    id: number,
    updateUserDto: UpdateUserRequestDto,
  ): Promise<UpdateUserResponseDto> {
    const updateUserData = UsersMapper.toUpdateData(updateUserDto);
    const user = await this.usersRepository.update(id, updateUserData);
    return UsersMapper.toUpdateResponse(user);
  }

  remove(id: number): Promise<void> {
    return this.usersRepository.remove(id);
  }
}
