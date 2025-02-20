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
    private readonly AuthRepository: Repository<Users>,
  ) {}

  async checkEmail(email: string): Promise<Users> {
    const data = this.AuthRepository.findOne({
      where: {
        email: email,
        deleted: false,
      },
    }).catch((error) => {
      throw new Error(error.message);
    });

    return data;
  }

  async create(body: IAuthCreate): Promise<Users> {
    const data = this.AuthRepository.create(body);

    return this.AuthRepository.save(data).catch((error) => {
      throw new Error(error.message);
    });
  }

  async updatePassword(id: string, body: IAuthUpdatePassword): Promise<Users> {
    const data = this.AuthRepository.update(
      {
        id: id,
      },
      body,
    )
      .then((result) => {
        if (result.affected) {
          return this.AuthRepository.findOne({ where: { id: id } });
        }
      })
      .catch((error) => {
        throw new Error(error.message);
      });

    return data;
  }

  async login(id: string, token: string) {
    const oldData = await this.AuthRepository.findOne({ where: { id: id } });
    const data = this.AuthRepository.update(
      {
        id: id,
      },
      { ...oldData, token: token, updated_at: new Date() },
    ).catch((error) => {
      throw new Error(error.message);
    });

    return data;
  }
}
