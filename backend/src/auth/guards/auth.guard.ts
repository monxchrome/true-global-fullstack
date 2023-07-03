import {
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) {
      const response = ctx.getContext().res;
      response.status(HttpStatus.NOT_FOUND).json({ message: 'Please login' });
      return false;
    }

    try {
      const decodedToken = await this.jwtService.verify(authorizationHeader, {
        secret: process.env.JWT_SECRET,
      });
      const userId = decodedToken.id;
      req.user = userId;
      return true;
    } catch (error) {
      const response = ctx.getContext().res;
      response
        .status(HttpStatus.UNAUTHORIZED)
        .json({ message: 'Invalid token' });
      return false;
    }
  }
}
