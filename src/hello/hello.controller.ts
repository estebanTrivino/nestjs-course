import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from "express";
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

@Controller('/hello')
export class HelloController {

    @Get()
    index(@Req() req: Request, @Res() res: Response) {
        res.status(200).json({
            message: 'Hello World'
        })
    }

    @Get('notFound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error Route'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        return num + 14;
    }

    @Get('active/:statis')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        return status;
    }

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number}) {
        return `Hello ${query.name}, you are ${query.age} years old`;
    }
}
