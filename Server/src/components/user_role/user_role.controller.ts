import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserRoleService } from './user_role.service';
import { Response } from 'express';

@Controller('UserRole')
export class UserRoleController {
    constructor(private userRole: UserRoleService) {}

@Get()
getAlluserRole() {
  return this.userRole.getAllUserRoles();
}
@Get('/:id')
getuserRoleById(@Param('id') id : string) {
  return this.userRole.getUserRoleById(id);
}
@Post()
adduserRole(@Body() userRoleObj:Response){
  return this.userRole.addUserRole(userRoleObj);
}
@Patch('/:id')
run1(@Param('id') id : number,@Body() userRole: any){
    this.userRole.updateUserRole(id,userRole);
}
@Delete('/:id')
async removeuserRole(@Param('id') id : number) {
    return await this.userRole.removeUserRole(id);
}
}
