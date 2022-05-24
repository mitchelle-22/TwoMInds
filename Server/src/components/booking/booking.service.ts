import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingRepository } from 'src/Repositories/booking.repository';

@Injectable()
export class BookingService {
    constructor(@InjectRepository(BookingRepository) private bookingRepo: BookingRepository){}

    async addbooking(booking: any) {
        try{
            console.log(booking)
            return await this.bookingRepo.save(booking);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllbookings() { //'booking_id',
        return await this.bookingRepo.find({ relations: ['UserFk',]
            // ['id','assessmentTaken','status','Answers','PatientResultFK','AssessmentFK','feedback','rate','active']
        })

    }
  async getbookingById(id :any){
     
    const booking = await this.bookingRepo.findOne(id);
    if (!booking) {
        throw new NotFoundException(`booking #${id} not found`);
    }
    return booking;
}
async getbookingByUserId(id :any){
     
    const booking = await this.bookingRepo.find({ where: { UserFk : id}})//(BookingFk.id);
    if (!booking) {
        throw new NotFoundException(`booking #${id} not found`);
    }
    return booking;
}
async getbookingByDate(date :any){
     
    const booking = await this.bookingRepo.findOne(date);
    if (!booking) {
        throw new NotFoundException(`booking #${date} not found`);
    }
    return booking;
}
async updatebooking(bookingId : any, assessObj : any){
    const user = await this.bookingRepo.findOne(bookingId);
    if (!user) {
        throw new NotFoundException(`booking #${bookingId} not found`);
    }
    return await this.bookingRepo.update(bookingId,assessObj);
}
async removebooking(Id: number){
    const booking = await this.bookingRepo.findOne(Id);
    if (!booking) {
        throw new NotFoundException(`booking #${Id} not found`);
    }
    await this.bookingRepo.remove(booking);
} 

}
