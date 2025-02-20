import { Injectable } from '@nestjs/common';
import { ReqCreateUserDTO, ReqUpdateUserDTO } from './dto/request.dto';

@Injectable()
export class UserServiceV1 {
  create(createUserDto: ReqCreateUserDTO) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: ReqUpdateUserDTO) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
