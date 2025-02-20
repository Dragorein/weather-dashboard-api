import { Module } from '@nestjs/common';
import { UserControllerV1 } from './v1/user.controller-v1';
import { UserServiceV1 } from './v1/user.service-v1';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { JWT_KEY } from 'src/config/constant';
import { JwtModule } from '@nestjs/jwt';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_KEY,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [UserControllerV1],
  providers: [UserServiceV1, UserRepository],
})
export class UserModule {}
