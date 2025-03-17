import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! 3';
  }

  postHello(req: Request): object {
    if (!req.body) {
      return {
        status: 400,
        error: 'text required',
      };
    }

    const { text } = req.body;

    if (text && text === 'hello') {
      return {
        status: 200,
        error: 'ok',
      };
    }

    return {
      status: 400,
      error: 'text must be hello',
    };
  }
}
