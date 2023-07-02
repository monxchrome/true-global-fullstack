import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesResolver } from './categories.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { UsersService } from '../users';
import { UsersEntity } from '../users';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity, UsersEntity])],
  providers: [CategoriesResolver, CategoriesService, UsersService, JwtService],
})
export class CategoriesModule {}
