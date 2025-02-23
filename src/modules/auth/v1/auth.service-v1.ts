import { Injectable } from '@nestjs/common';
import {
  IAuthCreate,
  IAuthLogin,
  // IAuthUpdatePassword,
} from './interface/auth.interface';
import { Users } from 'src/entities/user.entity';
import { ComparePassword, HashPassword } from 'src/lib/bcrypt/bcrypt';
import { AuthRepository } from '../auth.repository';
import { JWTSign } from 'src/lib/jwt/jwt';

@Injectable()
export class AuthServiceV1 {
  constructor(private readonly authRepository: AuthRepository) {}

  async create(createAuthI: IAuthCreate) {
    try {
      const checkExist = await this.authRepository.checkEmail(
        createAuthI.email,
      );

      if (checkExist) {
        throw new Error('Email already taken');
      }

      const registerBody = new Users();
      registerBody.name = createAuthI.name;
      registerBody.email = createAuthI.email;
      registerBody.password = await HashPassword(createAuthI.password);

      const data = await this.authRepository.create(registerBody);

      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async login(loginI: IAuthLogin) {
    try {
      const checkExist = await this.authRepository.checkEmail(loginI.email);

      if (!checkExist) {
        throw new Error("User doesn't exist");
      }

      const checkPassword = await ComparePassword(
        loginI.password,
        checkExist.password,
      );

      if (!checkPassword) {
        throw new Error('wrong password / wrong email');
      }

      const token = await JWTSign(checkExist.id);

      await this.authRepository.login(checkExist.id, token);

      return {
        name: checkExist.name,
        token,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
