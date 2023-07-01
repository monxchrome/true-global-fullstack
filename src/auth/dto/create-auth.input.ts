import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LoginDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;
}

@InputType()
export class RegisterDto {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Field()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  password: string;

  @IsString()
  @Field()
  role: string;
}
