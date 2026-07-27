import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const configuredKey = this.config.get<string>('API_KEY');

    if (!configuredKey) {
      throw new UnauthorizedException('API_KEY is not configured on the server');
    }

    const provided =
      request.header('x-api-key') ??
      request.header('authorization')?.replace(/^Bearer\s+/i, '');

    if (!provided || provided !== configuredKey) {
      throw new UnauthorizedException('Invalid or missing API key');
    }

    return true;
  }
}
