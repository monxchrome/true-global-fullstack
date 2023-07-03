import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsString()
  @Field(() => String)
  name: string;
}
