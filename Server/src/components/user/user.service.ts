import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'src/Repositories/role.repository';
import { UserRepository } from '../../Repositories/user.repository';
// import * as firebase from 'firebase-admin';
@Injectable()
export class UserService {
    itemss = new Array();
    item : any;
    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository,@InjectRepository(RoleRepository) private roleRepo: RoleRepository){}

    async addUserRole(user: any) {
        try{
            console.log(user)
            return await this.roleRepo.save(user);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllPersons() { //'role_id',
        return await this.userRepo.find({ relations: ['roleId','JournalFk','PatientFK','userFK']
        //   ['id', 'uuid', 'email', 'firstname', 'phone', 'emailVerified', 'password', 'profileComplete', 'last_login', 'created_at','roleId', 'active'] 
    });
    }
    async addPerson(user: any) {
          
      try{
          console.log(user)
          return await this.userRepo.save(user);
       }
       catch(err){
          throw new HttpException(err, HttpStatus.BAD_REQUEST);
       }
  }
  async getUserByEmail(email :any){
     
    const user = await this.userRepo.findOne(email);
    if (!user) {
        throw new NotFoundException(`User #${email} not found`);
    }
    return user;
}
async updateUser(PersonID : any, userObj : any){
    const user = await this.userRepo.findOne(PersonID);
    if (!user) {
        throw new NotFoundException(`User #${PersonID} not found`);
    }
    return await this.userRepo.update(PersonID,userObj);
}
async removeUser(Id: number){
    const user = await this.userRepo.findOne(Id);
    if (!user) {
        throw new NotFoundException(`User #${Id} not found`);
    }
    await this.userRepo.remove(user);
} 
async getUserByUUID(uuid :any){
     
    const user = await this.userRepo.findOne(uuid);
    if (!user) {
        throw new NotFoundException(`User #${uuid} not found`);
    }
    return user;
}
}
