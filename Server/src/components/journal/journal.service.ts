import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JournalRepository } from 'src/Repositories/journal.repository';

@Injectable()
export class JournalService {
    constructor(@InjectRepository(JournalRepository) private journalRepo: JournalRepository){}

    async addJournal(journal: any) {
        try{
            console.log(journal)
            return await this.journalRepo.save(journal);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllJournals() { //'journal_id',
        return await this.journalRepo.find({ relations: ['UserJournalFk','AdminJournalFk']
            // ['id','assessmentTaken','status','Answers','PatientResultFK','AssessmentFK','feedback','rate','active']
        })

    }
  async getJournalById(id :any){
     
    const journal = await this.journalRepo.findOne(id);
    if (!journal) {
        throw new NotFoundException(`journal #${id} not found`);
    }
    return journal;
}
async getJournalByUserId(id :any){
     console.log(id);
     
    const journal = await this.journalRepo.find({ where: { UserJournalFk : id}});
    if (!journal) {
        throw new NotFoundException(`journal #${id} not found`);
    }
    return journal;
}
async getJournalByDate(date :any){
     
    const journal = await this.journalRepo.findOne(date);
    if (!journal) {
        throw new NotFoundException(`journal #${date} not found`);
    }
    return journal;
}
async updateJournal(journalId : any, assessObj : any){
    const user = await this.journalRepo.findOne(journalId);
    if (!user) {
        throw new NotFoundException(`journal #${journalId} not found`);
    }
    return await this.journalRepo.update(journalId,assessObj);
}
async removeJournal(Id: number){
    const journal = await this.journalRepo.findOne(Id);
    if (!journal) {
        throw new NotFoundException(`journal #${Id} not found`);
    }
    await this.journalRepo.remove(journal);
} 

}
