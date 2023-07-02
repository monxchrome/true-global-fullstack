import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesService } from '../categories/categories.service';
import { CategoryEntity } from '../categories/entities/category.entity';
import { UsersEntity, UsersService } from '../users';
import { TaskEntity } from './entities';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity, CategoryEntity, UsersEntity]),
  ],
  providers: [TasksResolver, TasksService, CategoriesService, UsersService],
})
export class TasksModule {}
