import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

import { CreateTaskInput } from './create-task.input';

@InputType()
export class UpdateTaskInput extends PartialType(CreateTaskInput) {
  @IsString()
  @IsOptional()
  @Field(() => String, { nullable: true })
  name: string;

  @IsString()
  @MaxLength(155)
  @IsOptional()
  @Field(() => String, { nullable: true })
  description: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  endDate: Date;
}
