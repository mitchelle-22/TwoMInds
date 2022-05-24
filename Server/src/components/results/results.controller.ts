import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ResultsService } from './results.service';
import { Response } from 'express';
@Controller('results')
export class ResultsController {
    constructor(private results: ResultsService) {}

    @Get()
    getAllresultsations() {
      return this.results.getAllresultss();
    }
    @Get('/:id')
    getresultsById(@Param('id') id : string) {
      return this.results.getresultsById(id);
    }
    @Get('/user/:id')
    getresultsByUserId(@Param('id') id : string) {
      return this.results.getresultsByUserId(id);
    }
    @Get('/assessment/:id')
    getresultsByAssessmentId(@Param('id') id : string) {
      return this.results.getresultsByAssessmentId(id);
    }
    @Post()
    addresults(@Body() resultsObj:Response){
      return this.results.addresults(resultsObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() results: any){
        this.results.updateresults(id,results);
    }
    @Delete('/:id')
    async removeresults(@Param('id') id : number) {
        return await this.results.removeresults(id);
    }
}
