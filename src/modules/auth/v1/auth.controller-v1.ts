import {
  Controller,
  Post,
  Body,
  // Patch,
} from '@nestjs/common';
import { AuthServiceV1 } from './auth.service-v1';
import {
  ReqCreateAuthDTO,
  ReqLoginAuthDTO,
  // ReqUpdatePasswordAuthDTO,
} from './dto/request.dto';

@Controller('v1/auth')
export class AuthControllerV1 {
  constructor(private readonly authService: AuthServiceV1) {}

  @Post('register')
  create(@Body() createAuthDto: ReqCreateAuthDTO) {
    return this.authService.create(createAuthDto);
  }

  @Post('login')
  login(@Body() loginAuthDto: ReqLoginAuthDTO) {
    return this.authService.login(loginAuthDto);
  }

  // @Patch('password-update')
  // update(
  //   @Param('id') id: string,
  //   @Body() updatePasswordDto: ReqUpdatePasswordAuthDTO,
  // ) {
  //   return this.authService.update(+id, updatePasswordDto);
  // }
}
