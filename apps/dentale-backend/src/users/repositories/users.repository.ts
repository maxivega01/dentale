import { User } from '../entities/user.entity';
import { CreateUserData } from './data/create-user.data';
import { UpdateUserData } from './data/update-user.data';

export interface UserRepository {
  create(data: CreateUserData): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User | null>;
  update(id: number, data: UpdateUserData): Promise<User>;
  remove(id: number): Promise<void>;
}

export const USER_REPOSITORY = Symbol('USER_REPOSITORY');
