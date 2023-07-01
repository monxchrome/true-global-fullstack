import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersEntity } from '../../users/entities/users.entity';
import { TaskEntity } from '../../tasks/entities/task.entity';

@Entity('categories')
@ObjectType()
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => UsersEntity, { nullable: true })
  @ManyToOne(() => UsersEntity, (users) => users.categories, { nullable: true })
  users: UsersEntity;

  @Field(() => [TaskEntity])
  @OneToMany(() => TaskEntity, (task) => task.categories)
  tasks: TaskEntity[];
}
