import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
    private categoriesService: CategoriesService,
  ) {}

  async createTask(
    createTaskInput: CreateTaskInput,
    categoryId,
  ): Promise<Partial<TaskEntity>> {
    if (!categoryId) {
      throw new HttpException(
        'Category ID is required',
        HttpStatus.BAD_REQUEST,
      );
    }

    const category = await this.categoriesService.getById(categoryId);

    if (!category) {
      throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }

    const newTask: Partial<TaskEntity> = {
      name: createTaskInput.name,
      description: createTaskInput.description,
      startDate: createTaskInput.startDate,
      endDate: createTaskInput.endDate,
      categories: category,
    };

    return this.tasksRepository.save(newTask);
  }

  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.tasksRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.categories', 'tasks')
      .getMany();
  }

  async getById(taskId: string): Promise<TaskEntity> {
    return await this.tasksRepository
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.categories', 'tasks')
      .where('task.id = :taskId', { taskId })
      .getOne();
  }

  async updateTask(
    updateTaskInput: UpdateTaskInput,
    taskId: string,
  ): Promise<TaskEntity | undefined> {
    const task = await this.tasksRepository.findOne({
      where: { id: taskId },
    });

    if (task) {
      const updatedCategory = { ...task, ...updateTaskInput };
      return this.tasksRepository.save(updatedCategory);
    }
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.tasksRepository.delete(taskId);
  }
}
