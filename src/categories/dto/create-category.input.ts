import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsString()
  @Field(() => String)
  name: string;
}
