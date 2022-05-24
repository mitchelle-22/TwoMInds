import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { DailyassessmentsService } from './dailyassessments.service';
import { Response } from 'express';
@Controller('dailyassessments')
export class DailyassessmentsController {
    constructor(private assess: DailyassessmentsService) {}

    @Get()
    getAllDailyAssessments() {
      return this.assess.getAllDailyAssessments();
    }
    @Get('/:id')
    getDailyAssessmentById(@Param('id') id : string) {
      return this.assess.getDailyAssessmentById(id);
    }
    @Get('/user/:id')
    getDailyAssessmentByUserId(@Param('id') id : string) {
      return this.assess.getDailyAssessmentByUserId(id);
    } @Get('/level/:id')
    getDailyAssessmentByLevel(@Param('id') id : string) {
      return this.assess.getDailyAssessmentByLevel(id);
    }
    @Post()
    addDailyAssessment(@Body() assessObj:Response){
      return this.assess.addDailyAssessment(assessObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() assess: any){
        this.assess.updateDailyAssessment(id,assess);
    }
    @Delete('/:id')
    async removeassess(@Param('id') id : number) {
        return await this.assess.removeDailyAssessment(id);
    }
}
