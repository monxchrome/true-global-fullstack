import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Strategy } from 'passport-local';
import { Repository } from 'typeorm';

import { UsersEntity, UsersService } from '../../users';
import { AuthService } from '../auth.service';

@Injectable()
export class BearerStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
    @InjectRepository(UsersEntity)
    private readonly usersRepository: Repository<UsersEntity>,
  ) {
    super();
  }

  async validate(token: string): Promise<any> {
    let user: UsersEntity;
    try {
      const payload = await this.jwtService.verify(token);
      console.log(payload);
      user = await this.usersRepository.findOne(payload.id);
    } catch (e) {
      console.log(new Date().toISOString(), token);
      throw new UnauthorizedException();
    }
    return user;
  }
}
