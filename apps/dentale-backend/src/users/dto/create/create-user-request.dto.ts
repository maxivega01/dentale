import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserRequestDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(2)
  name: string;
}
