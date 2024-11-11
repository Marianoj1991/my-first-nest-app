import { Controller, Get, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidationUserPipe } from './pipe/validation-user/validation-user.pipe';
import { AuthGuard } from './guard/auth/auth.guard';


@Controller('pruebas')
export class PruebasController {
  @Get('/')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    return response.status(200).json({
      message: 'Entraste aquí',
    });
  }

  @Get('/greet')
  @UseGuards(new AuthGuard())
  greet(@Query(ValidationUserPipe) query: { name: string; age: number }) {
    console.log(typeof query.name);
    console.log(typeof query.age);
    return `Hello ${query.name}, you are ${query.age + 12} years old`;
  }
}
