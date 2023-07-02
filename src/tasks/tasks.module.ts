import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksResolver } from './tasks.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { CategoryEntity } from '../categories/entities/category.entity';
import { CategoriesService } from '../categories/categories.service';
import { UsersService } from '../users';
import { UsersEntity } from '../users';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskEntity, CategoryEntity, UsersEntity]),
  ],
  providers: [TasksResolver, TasksService, CategoriesService, UsersService],
})
export class TasksModule {}
