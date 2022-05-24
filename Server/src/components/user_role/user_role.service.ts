import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRoleRepository } from 'src/Repositories/userRole.repository';

@Injectable()
export class UserRoleService {

    constructor(@InjectRepository(UserRoleRepository) private UserRoleRepo: UserRoleRepository){}

    async addUserRole(UserRole: any) {
        try{
            console.log(UserRole)
            return await this.UserRoleRepo.save(UserRole);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllUserRoles() { //'UserRole_id',
        return await this.UserRoleRepo.find({ relations: ['roleId','user']
            // ['id','user','roleId','active']
        })

    }
  async getUserRoleById(id :any){
     
    const UserRole = await this.UserRoleRepo.findOne(id);
    if (!UserRole) {
        throw new NotFoundException(`UserRole #${id} not found`);
    }
    return UserRole;
}
async updateUserRole(UserRoleId : any, assessObj : any){
    const user = await this.UserRoleRepo.findOne(UserRoleId);
    if (!user) {
        throw new NotFoundException(`UserRole #${UserRoleId} not found`);
    }
    return await this.UserRoleRepo.update(UserRoleId,assessObj);
}
async removeUserRole(Id: number){
    const UserRole = await this.UserRoleRepo.findOne(Id);
    if (!UserRole) {
        throw new NotFoundException(`UserRole #${Id} not found`);
    }
    await this.UserRoleRepo.remove(UserRole);
} 

}
