import { HttpException, HttpStatus,Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Results } from 'src/entities/results.entity';
import { ResultsRepository } from 'src/Repositories/results.repository';

@Injectable()
export class ResultsService {
    constructor(@InjectRepository(ResultsRepository) private resultsRepo: ResultsRepository){}

    async addresults(results: any) {
        try{
            console.log(results)
            return await this.resultsRepo.save(results);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllresultss() { //'results_id',
        return await this.resultsRepo.find({ relations: ['AssessmentFK','PatientResultFK']
            // ['id','assessmentTaken','status','Answers','PatientResultFK','AssessmentFK','feedback','rate','active']
        })

    }
  async getresultsById(id :any){
     
    const results = await this.resultsRepo.findOne(id);
    if (!results) {
        throw new NotFoundException(`results #${id} not found`);
    }
    return results;
}
async getresultsByUserId(id :any){
     
    const results = await this.resultsRepo.find({ where: { PatientResultFK : id}});
    if (!results) {
        throw new NotFoundException(`results #${id} not found`);
    }
    return results;
}
async getresultsByAssessmentId(AssessmentFK :any){
     
    const results = await this.resultsRepo.findOne(AssessmentFK);
    if (!results) {
        throw new NotFoundException(`results #${AssessmentFK} not found`);
    }
    return results;
}
async updateresults(resultsId : any, assessObj : any){
    const user = await this.resultsRepo.findOne(resultsId);
    if (!user) {
        throw new NotFoundException(`results #${resultsId} not found`);
    }
    return await this.resultsRepo.update(resultsId,assessObj);
}
async removeresults(Id: number){
    const results = await this.resultsRepo.findOne(Id);
    if (!results) {
        throw new NotFoundException(`results #${Id} not found`);
    }
    await this.resultsRepo.remove(results);
} 


}
