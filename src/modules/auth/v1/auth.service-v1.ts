import { Injectable } from '@nestjs/common';
import {
  IAuthCreate,
  IAuthLogin,
  IAuthUpdatePassword,
} from './interface/auth.interface';

@Injectable()
export class AuthServiceV1 {
  create(createAuthI: IAuthCreate) {
    return {
      msg: 'This action adds a new auth',
      input: createAuthI,
    };
  }

  login(loginI: IAuthLogin) {
    return {
      msg: 'This action login a user',
      input: loginI,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthI: IAuthUpdatePassword) {
    return {
      msg: `This action updates a #${id} auth`,
      input: updateAuthI,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
