import { Module } from '@nestjs/common';
import { AuthControllerV1 } from './v1/auth.controller-v1';
import { AuthServiceV1 } from './v1/auth.service-v1';

@Module({
  controllers: [AuthControllerV1],
  providers: [AuthServiceV1],
})
export class AuthModule {}
