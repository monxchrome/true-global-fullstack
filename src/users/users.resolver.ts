import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';

@Resolver(() => UsersEntity)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UsersEntity])
  async getAllUsers(): Promise<UsersEntity[]> {
    return this.usersService.getAll();
  }
}
