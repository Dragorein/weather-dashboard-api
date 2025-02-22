import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { ResGetUserDTO } from './dto/response.dto';

@Injectable()
export class UserServiceV1 {
  constructor(private readonly userRepository: UserRepository) {}

  async findOne(id: string): Promise<ResGetUserDTO> {
    return await this.userRepository.findDetail(id).then((result) => ({
      id: result.id,
      name: result.name,
      email: result.email,
      deleted: result.deleted,
    }));
  }
}
