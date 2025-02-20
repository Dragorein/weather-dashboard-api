import { Module } from '@nestjs/common';
import { AuthControllerV1 } from './v1/auth.controller-v1';
import { AuthServiceV1 } from './v1/auth.service-v1';
import { AuthRepository } from './auth.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JWT_KEY } from 'src/config/constant';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_KEY,
      signOptions: { expiresIn: '1d' },
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AuthControllerV1],
  providers: [AuthServiceV1, AuthRepository],
})
export class AuthModule {}
