import { Injectable } from '@nestjs/common';
import { FindOneOptions, Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
  ) {}
  async getAll(): Promise<UsersEntity[]> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.categories', 'users')
      .getMany();
  }

  async getByEmail(email: string): Promise<UsersEntity> {
    const options: FindOneOptions<UsersEntity> = {
      where: { email: email },
    };

    return this.userRepository.findOne(options);
  }

  async getById(userId: string): Promise<UsersEntity> {
    return await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.categories', 'categories')
      .where('user.id = :userId', { userId })
      .getOne();
  }
}
