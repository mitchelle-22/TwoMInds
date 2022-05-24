import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeslotRepository } from 'src/Repositories/timeslot.repository';

@Injectable()
export class TimeslotService {
    constructor(@InjectRepository(TimeslotRepository) private timeslotRepo: TimeslotRepository){}

    async addTimeslot(timeslot: any) {
        try{
            console.log(timeslot)
            return await this.timeslotRepo.save(timeslot);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllTimeslots() { //'timeslot_id',
        return await this.timeslotRepo.find({ select: ['booked', 'available', 'date', 'active']
            // ['id','assessmentTaken','status','Answers','PatientResultFK','AssessmentFK','feedback','rate','active']
        })

    }
  async getTimeslotById(id :any){
     
    const timeslot = await this.timeslotRepo.findOne(id);
    if (!timeslot) {
        throw new NotFoundException(`timeslot #${id} not found`);
    }
    return timeslot;
}
async getTimeslotByUserId(id :any){
     
    const timeslot = await this.timeslotRepo.find({ where: { PatientResultFK : id}});
    if (!timeslot) {
        throw new NotFoundException(`timeslot #${id} not found`);
    }
    return timeslot;
}
async getTimeslotByDateId(date :any){
     
    const timeslot = await this.timeslotRepo.findOne(date);
    if (!timeslot) {
        throw new NotFoundException(`timeslot #${date} not found`);
    }
    return timeslot;
}
async updateTimeslot(timeslotId : any, assessObj : any){
    const user = await this.timeslotRepo.findOne(timeslotId);
    if (!user) {
        throw new NotFoundException(`timeslot #${timeslotId} not found`);
    }
    return await this.timeslotRepo.update(timeslotId,assessObj);
}
async removeTimeslot(Id: number){
    const timeslot = await this.timeslotRepo.findOne(Id);
    if (!timeslot) {
        throw new NotFoundException(`timeslot #${Id} not found`);
    }
    await this.timeslotRepo.remove(timeslot);
} 

}
