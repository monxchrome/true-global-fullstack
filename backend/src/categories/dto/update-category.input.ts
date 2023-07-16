import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString } from 'class-validator';

import { CreateCategoryInput } from './create-category.input';

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @IsString()
  @IsOptional()
  @Field(() => String)
  name: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  startDate?: Date;
}
