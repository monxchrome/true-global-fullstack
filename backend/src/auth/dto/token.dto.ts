import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TokenDto {
  @Field()
  access: string;

  @Field()
  refresh: string;
}
