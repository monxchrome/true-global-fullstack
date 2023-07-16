import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateCategoryInput {
  @IsString()
  @Field(() => String)
  name: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  startDate?: Date;
}
