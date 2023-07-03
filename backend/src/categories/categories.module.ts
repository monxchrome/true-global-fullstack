import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersEntity, UsersService } from '../users';
import { CategoriesResolver } from './categories.resolver';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, UsersEntity])],
  providers: [CategoriesResolver, CategoriesService, UsersService, JwtService],
})
export class CategoriesModule {}
