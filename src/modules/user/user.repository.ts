import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private readonly UserRepository: Repository<Users>) {}
}
