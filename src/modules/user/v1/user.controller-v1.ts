import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserServiceV1 } from './user.service-v1';
import { ReqCreateUserDTO, ReqUpdateUserDTO } from './dto/request.dto';

@Controller('user')
export class UserControllerV1 {
  constructor(private readonly userService: UserServiceV1) {}

  @Post()
  create(@Body() createUserDto: ReqCreateUserDTO) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: ReqUpdateUserDTO) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
