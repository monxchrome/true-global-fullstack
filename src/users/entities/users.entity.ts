import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from '../../categories/entities/category.entity';

@Entity('users')
@ObjectType()
export class UsersEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  role: string;

  @Field(() => [CategoryEntity])
  @OneToMany(() => CategoryEntity, (category) => category.users)
  categories: CategoryEntity[];
}
