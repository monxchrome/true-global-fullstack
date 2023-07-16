import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import * as process from 'process';
import { Repository } from 'typeorm';

import { UsersEntity, UsersService } from '../users';
import { RegisterDto } from './dto/create-auth.input';
import { TokenDto } from './dto/token.dto';

@Injectable()
export class AuthService {
  private readonly refreshSecret: string = process.env.REFRESH_SECRET;
  constructor(
    @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async compareHash(bodyPassword: string, hash: string): Promise<boolean> {
    return bcrypt.compare(bodyPassword, hash);
  }

  async signIn(userId: string): Promise<TokenDto> {
    const access = this.jwtService.sign({ id: userId });
    const refresh = this.jwtService.sign(
      { id: userId },
      { secret: this.refreshSecret },
    );

    return { access, refresh };
  }

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, +process.env.PASSWORD_SALT);
  }

  async registerUser(userData: RegisterDto): Promise<UsersEntity> {
    const passwordHash = await this.hashPassword(userData.password);

    const newUser: Partial<UsersEntity> = {
      email: userData.email,
      password: passwordHash,
      role: userData.role,
    };

    return this.userRepository.save(newUser);
  }

  async deleteUser(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }
}
