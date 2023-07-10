import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { UsersEntity, UsersService } from '../users';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/create-auth.input';
import { TokenDto } from './dto/token.dto';
import { Auth } from './entities/auth.entity';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => TokenDto)
  async login(@Args('loginInput') body: LoginDto): Promise<TokenDto> {
    if (!body.email) {
      throw new Error('ERROR.Check_request_email_param');
    }

    if (!body.password) {
      throw new Error('ERROR.Check_request_password_param');
    }

    const findUser: UsersEntity = await this.usersService.getByEmail(
      body.email,
    );

    if (!findUser) {
      throw new Error('Email or password is incorrect');
    }

    const isPasswordValid: boolean = await this.authService.compareHash(
      body.password,
      findUser.password,
    );

    if (isPasswordValid) {
      const tokens = await this.authService.signIn(findUser.id.toString());
      return tokens;
    }

    throw new Error('Email or password is incorrect');
  }

  @Mutation(() => UsersEntity)
  async register(
    @Args('registerInput') body: RegisterDto,
  ): Promise<UsersEntity> {
    let findUser;

    try {
      findUser = await this.usersService.getByEmail(body.email.trim());
    } catch (e) {
      console.log(e);
    }

    if (findUser) {
      throw new Error('User is already exist');
    }

    const user = await this.authService.registerUser({
      email: body.email,
      password: body.password,
      role: body.role,
    });

    if (user) {
      await this.authService.signIn(user.id.toString());
      return user;
    }

    throw new Error('ERROR.Failed_to_register_user');
  }
}
