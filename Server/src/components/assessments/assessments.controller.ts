import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AssessmentsService } from './assessments.service';
import { Response } from 'express';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
@Controller('assessments')
export class AssessmentsController {
  constructor(private assess: AssessmentsService) { }

  @Get()
  getAllDailyAssessments() {
    return this.assess.getAllAssessments();
  }
  @Get('/:id')
  getDailyAssessmentById(@Param('id') id: string) {
    return this.assess.getAssessmentById(id);
  }
  @Get('level/:level')
  getDailyAssessmentByLevel(@Param('level') level: string) {
    return this.assess.getAssessmentByLevel(level);
  }
  @Post()
  addDailyAssessment(@Body() assessObj: Response) {
    return this.assess.addAssessment(assessObj);
  }
  @Patch('/:id')
  run1(@Param('id') id: number, @Body() assess: any) {
    this.assess.updateAssessment(id, assess);
  }
  @Delete('/:id')
  async removeassess(@Param('id') id: number) {
    return await this.assess.removeAssessment(id);
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('photo',  { dest: './uploads' }))
  uploadSingle(@UploadedFile() file) {

    console.log(file);

  }
}
