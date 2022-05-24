import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Response } from 'express'; 
@Controller('booking')
export class BookingController {
    constructor(private Booking: BookingService) {}
 
    @Get()
    getAllBookings() {
      return this.Booking.getAllbookings();
    }
    @Get('/date')
    getBookingById(@Body() date:Response) {
      return this.Booking.getbookingByDate(date);
    }
    @Get('/user/:id')
    getBookingByUserId(@Param('id') id : string) {
      return this.Booking.getbookingByUserId(id);
    }
    // @Get('/date/:id')
    // getBookingByDateId(@Param('id') id : string) {
    //   return this.Booking.getBookingByAssessmentId(id);
    // }
    @Post()
    addBooking(@Body() BookingObj:Response){
      return this.Booking.addbooking(BookingObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() Booking: any){
        this.Booking.updatebooking(id,Booking);
    }
    @Delete('/:id')
    async removeBooking(@Param('id') id : number) {
        return await this.Booking.removebooking(id);
    }

}
