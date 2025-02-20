import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(Users)
    private readonly UserRepository: Repository<Users>,
  ) {}

  async findDetail(user: string): Promise<Users> {
    const data = await this.UserRepository.findOne({
      where: { id: user },
    }).catch((error) => {
      throw new Error(error.message);
    });

    return data;
  }
}
