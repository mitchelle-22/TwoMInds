import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'src/Repositories/role.repository';

@Injectable()
export class RoleService {

    constructor(@InjectRepository(RoleRepository) private roleRepo: RoleRepository){}

    async addRole(Role: any) {
        try{
            console.log(Role)
            return await this.roleRepo.save(Role);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllRoles() { //'role_id',
        return await this.roleRepo.find({ select: 
            ['id','name','description','active']
        })

    }
  async getRoleById(id :any){
     
    const Role = await this.roleRepo.findOne(id);
    if (!Role) {
        throw new NotFoundException(`Role #${id} not found`);
    }
    return Role;
}
async updateRole(RoleId : any, assessObj : any){
    const user = await this.roleRepo.findOne(RoleId);
    if (!user) {
        throw new NotFoundException(`Role #${RoleId} not found`);
    }
    return await this.roleRepo.update(RoleId,assessObj);
}
async removeRole(Id: number){
    const Role = await this.roleRepo.findOne(Id);
    if (!Role) {
        throw new NotFoundException(`Role #${Id} not found`);
    }
    await this.roleRepo.remove(Role);
} 

}
