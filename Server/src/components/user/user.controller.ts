import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {Response} from 'express'
@Controller('user')
export class UserController {
    constructor(private user: UserService) {}

    @Get()
    test() {
      return this.user.getAllPersons();
    }
    @Get('/uuid/:id')
    getUserByuuid(@Body('id') id : string) {
      return this.user.getUserByUUID(id);
    }
    @Post()
    run(@Body() userObj:Response){
      return this.user.addPerson(userObj);
    }
    @Get('/email/:email')
    test1(@Param() email:string){
      return this.user.getUserByEmail(email);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() user: any){
        this.user.updateUser(id,user);
    }
    @Delete('/:id')
    async removeUser(@Param('id') id : number) {
        return await this.user.removeUser(id);
    }
    @Post('role')
    addRole(@Body() userObj:Response){
      return this.user.addUserRole(userObj);
    }
}
