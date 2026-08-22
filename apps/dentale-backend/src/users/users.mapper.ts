import { User } from './entities/user.entity';
import { CreateUserRequestDto } from './dto/create/create-user-request.dto';
import { CreateUserResponseDto } from './dto/create/create-user-response.dto';
import { UpdateUserRequestDto } from './dto/update/update-user-request.dto';
import { UpdateUserResponseDto } from './dto/update/update-user-response.dto';
import { FindAllUsersResponseDto } from './dto/find-all/find-all-users-response.dto';
import { FindOneUserResponseDto } from './dto/find-one/find-one-user-response.dto';
import { CreateUserData } from './repositories/data/create-user.data';
import { UpdateUserData } from './repositories/data/update-user.data';

export class UsersMapper {
  static toCreateData(dto: CreateUserRequestDto): CreateUserData {
    return new CreateUserData({ email: dto.email, name: dto.name });
  }

  static toUpdateData(dto: UpdateUserRequestDto): UpdateUserData {
    return new UpdateUserData({ email: dto.email, name: dto.name });
  }

  static toCreateResponse(user: User): CreateUserResponseDto {
    return new CreateUserResponseDto(user);
  }

  static toUpdateResponse(user: User): UpdateUserResponseDto {
    return new UpdateUserResponseDto(user);
  }

  static toFindAllResponse(user: User): FindAllUsersResponseDto {
    return new FindAllUsersResponseDto(user);
  }

  static toFindOneResponse(user: User): FindOneUserResponseDto {
    return new FindOneUserResponseDto(user);
  }
}
