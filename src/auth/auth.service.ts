import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/create-auth.input';
import { UsersEntity } from '../users/entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as process from 'process';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async compareHash(bodyPassword: string, hash: string) {
    return bcrypt.compare(bodyPassword, hash);
  }

  async signIn(userId: string) {
    return this.jwtService.sign({ id: userId });
  }

  async hashPassword(password: string) {
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
