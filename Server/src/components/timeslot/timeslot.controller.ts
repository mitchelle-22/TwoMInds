import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TimeslotService } from './timeslot.service';
import { Response } from 'express'; 
@Controller('timeslot')
export class TimeslotController {
    constructor(private timeslot: TimeslotService) {}

    @Get()
    getAllTimeslots() {
      return this.timeslot.getAllTimeslots();
    }
    @Get('/:id')
    getTimeslotById(@Param('id') id : string) {
      return this.timeslot.getTimeslotById(id);
    }
    @Get('/date/:id')
    getTimeslotByDateId(@Body() date:Response) {
      return this.timeslot.getTimeslotByDateId(date);
    }
    // @Get('/date/:id')
    // getTimeslotByDateId(@Param('id') id : string) {
    //   return this.timeslot.getTimeslotByAssessmentId(id);
    // }
    @Post()
    addTimeslot(@Body() timeslotObj:Response){
      return this.timeslot.addTimeslot(timeslotObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() timeslot: any){
        this.timeslot.updateTimeslot(id,timeslot);
    }
    @Delete('/:id')
    async removeTimeslot(@Param('id') id : number) {
        return await this.timeslot.removeTimeslot(id);
    }

}
