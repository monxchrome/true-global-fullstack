import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { TasksService } from './tasks.service';
import { TaskEntity } from './entities/task.entity';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Resolver(() => TaskEntity)
export class TasksResolver {
  constructor(private readonly tasksService: TasksService) {}

  @Mutation(() => TaskEntity)
  async createTask(
    @Args('createTaskInput') createTaskInput: CreateTaskInput,
    @Args('categoryId', { type: () => String }) categoryId: string,
  ): Promise<Partial<TaskEntity>> {
    return this.tasksService.createTask(createTaskInput, categoryId);
  }

  @Query(() => [TaskEntity])
  async getAllTasks(): Promise<TaskEntity[]> {
    return this.tasksService.getAllTasks();
  }

  @Query(() => TaskEntity)
  async getTask(
    @Args('taskId', { type: () => String }) taskId: string,
  ): Promise<TaskEntity> {
    return this.tasksService.getById(taskId);
  }

  @Mutation(() => TaskEntity)
  async updateTask(
    @Args('updateTaskInput') updateTaskInput: UpdateTaskInput,
    @Args('taskId', { type: () => String }) taskId: string,
  ): Promise<TaskEntity> {
    return this.tasksService.updateTask(updateTaskInput, taskId);
  }

  @Mutation(() => TaskEntity)
  async deleteTask(
    @Args('taskId', { type: () => String }) taskId: string,
  ): Promise<void> {
    return this.tasksService.deleteTask(taskId);
  }
}
