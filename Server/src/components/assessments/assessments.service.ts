import { HttpException, HttpStatus, Injectable, NotFoundException,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AssessmentRepository } from 'src/Repositories/assessement.repository';
import { DailyAssessmentRepository } from 'src/Repositories/dailyassessement.repository';
import { RoleRepository } from 'src/Repositories/role.repository';
import { UserRepository } from 'src/Repositories/user.repository';

@Injectable()
export class AssessmentsService {
    
    constructor(@InjectRepository(UserRepository) private userRepo: UserRepository,@InjectRepository(RoleRepository) private roleRepo: RoleRepository,@InjectRepository(DailyAssessmentRepository) private DailyAssessmentRepo: DailyAssessmentRepository,@InjectRepository(AssessmentRepository) private AssessmentRepo: AssessmentRepository){}

    async addAssessment(assessment: any) {
        try{
            console.log(assessment)
            return await this.AssessmentRepo.save(assessment);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllAssessments() { //'role_id',
        return await this.AssessmentRepo.find({ relations: ['DailyAssessmentFK','ResultFk']
            // ['id','AssessmentFK','Question','level','Date','image']
        })

    }
  async getAssessmentById(id :any){
     
    const assessment = await this.AssessmentRepo.findOne(id);
    if (!assessment) {
        throw new NotFoundException(`assessment #${id} not found`);
    }
    return assessment;
    // find({ where: { UserJournalFk : id}})
}
async getAssessmentByLevel(level :any){
     
    const assessment = await this.AssessmentRepo.findOne({level:level});
    if (!assessment) {
        throw new NotFoundException(`assessment #${level} not found`);
    }
    return assessment;
    // find({ where: { UserJournalFk : id}})
}
async updateAssessment(assessmentId : any, assessObj : any){
    const user = await this.AssessmentRepo.findOne(assessmentId);
    if (!user) {
        throw new NotFoundException(`assessment #${assessmentId} not found`);
    }
    return await this.AssessmentRepo.update(assessmentId,assessObj);
}
async removeAssessment(Id: number){
    const assessment = await this.AssessmentRepo.findOne(Id);
    if (!assessment) {
        throw new NotFoundException(`assessment #${Id} not found`);
    }
    await this.AssessmentRepo.remove(assessment);
} 

}
