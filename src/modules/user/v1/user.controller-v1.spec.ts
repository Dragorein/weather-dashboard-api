import { Test, TestingModule } from '@nestjs/testing';
import { UserControllerV1 } from './user.controller-v1';
import { UserServiceV1 } from './user.service-v1';

describe('UserController', () => {
  let controller: UserControllerV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserControllerV1],
      providers: [UserServiceV1],
    }).compile();

    controller = module.get<UserControllerV1>(UserControllerV1);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
