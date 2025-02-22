import { IsEmail, IsNotEmpty } from 'class-validator';

export class ReqCreateAuthDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class ReqLoginAuthDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class ReqUpdatePasswordAuthDTO {
  @IsNotEmpty()
  password: string;
}
