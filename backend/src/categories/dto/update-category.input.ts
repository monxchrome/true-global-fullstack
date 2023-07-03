import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

import { CreateCategoryInput } from './create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @IsString()
  @IsOptional()
  @Field(() => String)
  name: string;
}
