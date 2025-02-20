import { Test, TestingModule } from '@nestjs/testing';
import { UserServiceV1 } from './user.service-v1';

describe('UserService', () => {
  let service: UserServiceV1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserServiceV1],
    }).compile();

    service = module.get<UserServiceV1>(UserServiceV1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
