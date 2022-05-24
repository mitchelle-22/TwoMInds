import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Response } from 'express'; 
import { BookingstatusService } from './bookingstatus.service';
@Controller('bookingstatus')
export class BookingstatusController {
    constructor(private bookStatus: BookingstatusService) {}
   
    @Get()
    getAllBookStatuss() {
      return this.bookStatus.getAllBookStatuss();
    }
    @Get('/:id')
    getBookStatusById(@Param('id') id : string) {
      return this.bookStatus.getBookStatusById(id);
    }
    @Post()
    addBookStatus(@Body() bookStatusObj:Response){
      return this.bookStatus.addBookStatus(bookStatusObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() bookStatus: any){
        this.bookStatus.updateBookStatus(id,bookStatus);
    }
    @Delete('/:id')
    async removeBookStatus(@Param('id') id : number) {
        return await this.bookStatus.removeBookStatus(id);
    }

}
