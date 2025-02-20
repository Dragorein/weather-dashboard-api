import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class AuthRepository {
  constructor(private readonly AuthRepository: Repository<User>) {}
}
