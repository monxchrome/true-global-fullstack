import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  Context,
  GqlExecutionContext,
} from '@nestjs/graphql';
import { CategoriesService } from './categories.service';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { AuthGuard } from '../auth/guards/auth.guard';
import { UseGuards } from '@nestjs/common';

@Resolver(() => CategoryEntity)
export class CategoriesResolver {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Mutation(() => CategoryEntity)
  @UseGuards(AuthGuard)
  createCategory(
    @Args('createCategoryInput') createCategoryInput: CreateCategoryInput,
    @Context() context: any,
  ) {
    const userId = context.req.user;

    return this.categoriesService.createCategory(createCategoryInput, userId);
  }

  @Query(() => [CategoryEntity])
  getAllCategories(): Promise<CategoryEntity[]> {
    return this.categoriesService.getAll();
  }

  @Query(() => CategoryEntity)
  getCategory(
    @Args('categoryId', { type: () => String }) categoryId: string,
  ): Promise<CategoryEntity> {
    return this.categoriesService.getById(categoryId);
  }

  @Mutation(() => CategoryEntity)
  updateCategory(
    @Args('categoryId', { type: () => String }) categoryId: string,
    @Args('updateCategoryInput') updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryEntity> {
    return this.categoriesService.updateCategory(
      updateCategoryInput,
      categoryId,
    );
  }

  @Mutation(() => CategoryEntity)
  async deleteCategory(
    @Args('categoryId', { type: () => String }) categoryId: string,
  ): Promise<void> {
    return await this.categoriesService.deleteCategory(categoryId);
  }
}
