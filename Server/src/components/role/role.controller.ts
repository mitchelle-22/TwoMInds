import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { Response } from 'express';
@Controller('Role')
export class RoleController {
    constructor(private Role: RoleService) {}

@Get()
getAllRoleations() {
  return this.Role.getAllRoles();
}
@Get('/:id')
getRoleById(@Param('id') id : string) {
  return this.Role.getRoleById(id);
}
@Post()
addRole(@Body() RoleObj:Response){
  return this.Role.addRole(RoleObj);
}
@Patch('/:id')
run1(@Param('id') id : number,@Body() Role: any){
    this.Role.updateRole(id,Role);
}
@Delete('/:id')
async removeRole(@Param('id') id : number) {
    return await this.Role.removeRole(id);
}

}
