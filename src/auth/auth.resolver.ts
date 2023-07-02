import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginDto, RegisterDto } from './dto/create-auth.input';
import { UsersService } from '../users/users.service';
import { UsersEntity } from "../users";

@Resolver(() => Auth)
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Mutation(() => String)
  async login(@Args('loginInput') body: LoginDto): Promise<string> {
    if (!body.email) {
      throw new Error('ERROR.Check_request_email_param');
    }

    if (!body.password) {
      throw new Error('ERROR.Check_request_password_param');
    }

    const findUser: UsersEntity = await this.usersService.getByEmail(body.email);

    if (!findUser) {
      throw new Error('Email or password is incorrect');
    }

    const isPasswordValid: boolean = await this.authService.compareHash(
      body.password,
      findUser.password,
    );

    if (isPasswordValid) {
      const token = await this.authService.signIn(findUser.id.toString());
      return token;
    }

    throw new Error('Email or password is incorrect');
  }

  @Mutation(() => String)
  async register(@Args('registerInput') body: RegisterDto): Promise<string> {
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
      const token = await this.authService.signIn(user.id.toString());
      return token;
    }

    throw new Error('ERROR.Failed_to_register_user');
  }
}
