import {
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export async function JWTSign(userId: string) {
  try {
    return jwt.sign({ userId: userId }, process.env.JWT_KEY);
  } catch (err) {
    console.log('Error signing JWT', err);
    throw new InternalServerErrorException();
  }
}
export async function JWTVerify(token: string): Promise<any> {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (err) {
    throw new UnauthorizedException('unauthorized - ' + err);
  }
}
