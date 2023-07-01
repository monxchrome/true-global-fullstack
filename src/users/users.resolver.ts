import { Args, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/users.entity';

@Resolver(() => UsersEntity)
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => [UsersEntity])
  async getAllUsers(): Promise<UsersEntity[]> {
    return this.usersService.getAll();
  }

  @Query(() => UsersEntity)
  async getById(@Args('userId', { type: () => String }) userId: string): Promise<UsersEntity> {
    return this.usersService.getById(userId);
  }
}
