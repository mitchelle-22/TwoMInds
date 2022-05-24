import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivitiesRepository } from 'src/Repositories/activities.repository';

@Injectable()
export class ActitiviesService {

    constructor(@InjectRepository(ActivitiesRepository) private ActivitiesRepo: ActivitiesRepository){}

    async addActivities(Activities: any) {
        try{
            console.log(Activities)
            return await this.ActivitiesRepo.save(Activities);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllActivitiess() { //'Activities_id',
        return await this.ActivitiesRepo.find({ select: 
            ['id','name','Description','img','active']
        })

    }
  async getActivitiesById(id :any){
     
    const Activities = await this.ActivitiesRepo.findOne(id);
    if (!Activities) {
        throw new NotFoundException(`Activities #${id} not found`);
    }
    return Activities;
}
async updateActivities(ActivitiesId : any, assessObj : any){
    const user = await this.ActivitiesRepo.findOne(ActivitiesId);
    if (!user) {
        throw new NotFoundException(`Activities #${ActivitiesId} not found`);
    }
    return await this.ActivitiesRepo.update(ActivitiesId,assessObj);
}
async removeActivities(Id: number){
    const Activities = await this.ActivitiesRepo.findOne(Id);
    if (!Activities) {
        throw new NotFoundException(`Activities #${Id} not found`);
    }
    await this.ActivitiesRepo.remove(Activities);
} 

}
