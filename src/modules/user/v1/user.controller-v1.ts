import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserServiceV1 } from './user.service-v1';
import { AuthGuard } from 'src/middlewares/guards/auth.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { CurrentUserEnum } from 'src/common/enums';

@Controller('v1/user')
export class UserControllerV1 {
  constructor(private readonly userService: UserServiceV1) {}

  @UseGuards(AuthGuard)
  @Get()
  findOne(@CurrentUser(CurrentUserEnum.userId) userId: string) {
    return this.userService.findOne(userId);
  }
}
