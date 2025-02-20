import {
  CanActivate,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { IJwtUser } from '../../common/interfaces/jwt.interface';
import { JWTVerify } from '../../lib/jwt/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token: string = request.headers.authorization;

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      // Validate JWT Token
      const tokenValue = token.split(' ');
      const decoded: IJwtUser = await JWTVerify(tokenValue[1]);
      request.user = decoded;

      return true;
    } catch (err) {
      console.log('Auth Guards error:', err);
      throw new InternalServerErrorException();
    }
  }
}
