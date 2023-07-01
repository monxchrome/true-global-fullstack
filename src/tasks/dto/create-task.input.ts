import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @IsString()
  @Field(() => String)
  name: string;

  @IsString()
  @MaxLength(155)
  @Field(() => String)
  description: string;

  @IsDate()
  @IsOptional()
  @Field(() => Date, { nullable: true })
  startDate?: Date;

  @IsDate()
  @Field(() => Date)
  endDate: Date;
}
