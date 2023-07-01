import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity';

@Entity('tasks')
@ObjectType()
export class TaskEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  startDate?: Date;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true, type: 'timestamptz' })
  endDate?: Date;

  @Field(() => CategoryEntity, { nullable: true })
  @ManyToOne(() => CategoryEntity, (categories) => categories.tasks, {
    nullable: true,
  })
  categories: CategoryEntity;
}
