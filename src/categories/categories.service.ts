import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { UsersService } from '../users/users.service';

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

  async getAll() {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'users')
      .getMany();
  }

  async getById(categoryId: string) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.users', 'users')
      .where('category.id = :categoryId', { categoryId })
      .getOne();
  }

  async updateCategory(
    updateCategoryInput: UpdateCategoryInput,
    categoryId: string,
  ) {
    const category = await this.categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (category) {
      const updatedCategory = { ...category, ...updateCategoryInput };
      return this.categoryRepository.save(updatedCategory);
    }
  }

  async deleteCategory(categoryId: string) {
    await this.categoryRepository.delete(categoryId);
  }
}
