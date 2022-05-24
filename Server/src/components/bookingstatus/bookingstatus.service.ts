import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingStatusRepository } from 'src/Repositories/bookingstatus.repository';

@Injectable()
export class BookingstatusService {
    constructor(@InjectRepository(BookingStatusRepository) private bookStatus: BookingStatusRepository){}

    async addBookStatus(bookStatus: any) {
        try{
            console.log(bookStatus)
            return await this.bookStatus.save(bookStatus);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllBookStatuss() { //'role_id',
        return await this.bookStatus.find({ select:
        ['id','name','description','active']
    });
          
    }  
  async getBookStatusById(id :any){
     
    const assessment = await this.bookStatus.findOne(id);
    if (!assessment) {
        throw new NotFoundException(`daily assessment #${id} not found`);
    }
    return assessment;
}
async updateBookStatus(assessmentId : any, assessObj : any){
    const user = await this.bookStatus.findOne(assessmentId);
    if (!user) {
        throw new NotFoundException(`daily assessment #${assessmentId} not found`);
    }
    return await this.bookStatus.update(assessmentId,assessObj);
}
async removeBookStatus(Id: number){
    const assessment = await this.bookStatus.findOne(Id);
    if (!assessment) {
        throw new NotFoundException(`daily assessment #${Id} not found`);
    }
    await this.bookStatus.remove(assessment);
} 

}
