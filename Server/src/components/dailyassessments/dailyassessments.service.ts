import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentRepository } from 'src/Repositories/assessement.repository';
import { DailyAssessmentRepository } from 'src/Repositories/dailyassessement.repository';
import { RoleRepository } from 'src/Repositories/role.repository';
import { UserRepository } from 'src/Repositories/user.repository';

@Injectable()
export class DailyassessmentsService {
    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository,@InjectRepository(RoleRepository) private roleRepo: RoleRepository,@InjectRepository(DailyAssessmentRepository) private DailyAssessmentRepo: DailyAssessmentRepository,@InjectRepository(AssessmentRepository) private AssessmentRepo: AssessmentRepository){}

    async addDailyAssessment(Dailyassess: any) {
        try{
            console.log(Dailyassess)
            return await this.DailyAssessmentRepo.save(Dailyassess);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllDailyAssessments() { //'role_id',
        return await this.DailyAssessmentRepo.find({ relations:['PatientFK','AssessmentFk']
        // ['id','AssessmentFk','PatientFK','answer','date']
    });
          
    }
    async getDailyAssessmentByUserId(id :any){
     
        const assessment = await this.DailyAssessmentRepo.find({ relations:['AssessmentFk'],where: { PatientFK : id}});
        if (!assessment) {
            throw new NotFoundException(` daily assessment #${id} not found`);
        }
        return assessment;
    }   
    async getDailyAssessmentByLevel(level :any){
     console.log(level);
     let id = 1;
     const assess = await this.AssessmentRepo.findOne({level:level});
     if (!assess) {
         throw new NotFoundException(`assessment #${level} not found`);
     }
        // const assessment = await this.DailyAssessmentRepo.find({where:{AssessmentFk:level}});//find({ where: { level : level.id}})//findOne(level.id);
        // if (!assessment) {
        //     throw new NotFoundException(` daily assessment #${level.id} not found`);
        // }
        // return assessment;
        return assess;

    }    
  async getDailyAssessmentById(id :any){
     
    const assessment = await this.DailyAssessmentRepo.findOne(id);
    if (!assessment) {
        throw new NotFoundException(`daily assessment #${id} not found`);
    }
    return assessment;
}
async updateDailyAssessment(assessmentId : any, assessObj : any){
    const user = await this.DailyAssessmentRepo.findOne(assessmentId);
    if (!user) {
        throw new NotFoundException(`daily assessment #${assessmentId} not found`);
    }
    return await this.DailyAssessmentRepo.update(assessmentId,assessObj);
}
async removeDailyAssessment(Id: number){
    const assessment = await this.DailyAssessmentRepo.findOne(Id);
    if (!assessment) {
        throw new NotFoundException(`daily assessment #${Id} not found`);
    }
    await this.DailyAssessmentRepo.remove(assessment);
} 

}
