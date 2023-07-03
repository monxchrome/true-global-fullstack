import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersEntity, UsersService } from '../users';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { BearerStrategy } from './strategies/bearer.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    ConfigModule.forRoot(),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get('JWT_EXPIRES_IN'),
        },
      }),
      inject: [ConfigService],
    }),
    PassportModule,
  ],
  providers: [AuthResolver, AuthService, UsersService, BearerStrategy],
})
export class AuthModule {}
