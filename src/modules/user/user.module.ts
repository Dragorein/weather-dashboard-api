import { Module } from '@nestjs/common';
import { UserControllerV1 } from './v1/user.controller-v1';
import { UserServiceV1 } from './v1/user.service-v1';

@Module({
  controllers: [UserControllerV1],
  providers: [UserServiceV1],
})
export class UserModule {}
