import { IsNotEmpty } from 'class-validator';

export class ReqCreateAuthDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class ReqLoginAuthDTO {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class ReqUpdatePasswordAuthDTO {
  @IsNotEmpty()
  password: string;
}
