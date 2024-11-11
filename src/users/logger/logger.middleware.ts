import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {

    console.log('URL', req.url)
    console.log('BASE-URL', req.baseUrl)
    console.log('PATH', req.path)
    console.log('PARAMS', req.params)
    console.log('QUERY', req.query)

    next();
  }
}
  