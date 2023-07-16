import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column, CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";

import { TaskEntity } from '../../tasks/entities/task.entity';
import { UsersEntity } from '../../users';

@Entity('categories')
@ObjectType()
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => Date, { nullable: true })
  @CreateDateColumn()
  startDate?: Date;

  @Field(() => UsersEntity, { nullable: true })
  @ManyToOne(() => UsersEntity, (users) => users.categories, { nullable: true })
  users: UsersEntity;

  @Field(() => [TaskEntity], { nullable: true })
  @OneToMany(() => TaskEntity, (task) => task.categories)
  tasks?: TaskEntity[];
}
