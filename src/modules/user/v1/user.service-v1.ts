import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
export class UserServiceV1 {
  constructor(private userRepository: UserRepository) {}

  async findOne(id: string) {
    return await this.userRepository.findDetail(id);
  }
}
