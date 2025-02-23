import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/user.entity';
import {
  IAuthCreate,
  IAuthUpdatePassword,
} from './v1/interface/auth.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthRepository {
  constructor(
    @InjectRepository(Users)
    private readonly authRepository: Repository<Users>,
  ) {}

  async checkEmail(email: string): Promise<Users> {
    const data = this.authRepository.findOne({
      where: {
        email: email,
        deleted: false,
      },
    });

    return data;
  }

  async create(body: IAuthCreate): Promise<Users> {
    const data = this.authRepository.create(body);

    return this.authRepository
      .insert(data)
      .then((result) => result.raw)
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  async updatePassword(id: string, body: IAuthUpdatePassword): Promise<Users> {
    const data = this.authRepository
      .update(
        {
          id: id,
        },
        body,
      )
      .then((result) => {
        if (result.affected) {
          return this.authRepository.findOne({ where: { id: id } });
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    return data;
  }

  async login(id: string, token: string) {
    const oldData = await this.authRepository.findOne({ where: { id: id } });
    const data = this.authRepository.update(
      {
        id: id,
      },
      { ...oldData, token: token, updated_at: new Date() },
    );

    return data;
  }
}
