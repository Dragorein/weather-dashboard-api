import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthServiceV1 } from './auth.service-v1';
import {
  ReqCreateAuthDTO,
  ReqLoginAuthDTO,
  ReqUpdatePasswordAuthDTO,
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch('password-update')
  update(
    @Param('id') id: string,
    @Body() updatePasswordDto: ReqUpdatePasswordAuthDTO,
  ) {
    return this.authService.update(+id, updatePasswordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
