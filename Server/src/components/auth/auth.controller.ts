import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express'
@Controller('auth')
export class AuthController {
    constructor(private auth : AuthService) {    }
    @Post('/login')
    async login(@Body() user:any, @Res() res: Response){//@Res() res: Response
        const response = await this.auth.login(user);
        return res.json(response)
    }
    @Post('/register')
    async add(@Body() user: any, @Res() res: Response) {
        const response = await this.auth.addUser(user);
        console.log(response)
        return res.json(response)
    }
}
