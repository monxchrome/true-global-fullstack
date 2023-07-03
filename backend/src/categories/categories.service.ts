import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersService } from '../users';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    private usersService: UsersService,
  ) {}

  async createCategory(
    createCategoryInput: CreateCategoryInput,
    userId: string,
  ): Promise<Partial<CategoryEntity>> {
    if (!userId) {
      throw new HttpException('User ID is required', HttpStatus.BAD_REQUEST);
    }

    const user = await this.usersService.getById(userId);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const newCategory: Partial<CategoryEntity> = {
      name: createCategoryInput.name,
      users: user,
    };

    return this.categoryRepository.save(newCategory);
  }

  async getAll(): Promise<CategoryEntity[]> {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'users')
      .getMany();
  }

  async getById(categoryId: string): Promise<CategoryEntity> {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'users')
      .where('category.id = :categoryId', { categoryId })
      .getOne();
  }

  async updateCategory(
    updateCategoryInput: UpdateCategoryInput,
    categoryId: string,
  ): Promise<CategoryEntity | undefined> {
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (category) {
      const updatedCategory = { ...category, ...updateCategoryInput };
      return this.categoryRepository.save(updatedCategory);
    }
  }

  async deleteCategory(categoryId: string): Promise<void> {
    await this.categoryRepository.delete(categoryId);
  }
}
