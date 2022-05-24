import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ActitiviesService } from './actitivies.service';
import { Response } from 'express';
@Controller('actitivies')
export class ActitiviesController {
    constructor(private activity: ActitiviesService) {}

    @Get()
    getAllActivities() {
      return this.activity.getAllActivitiess();
    }
    @Get('/:id')
    getActivityById(@Param('id') id : string) {
      return this.activity.getActivitiesById(id);
    }
    @Post()
    addActivity(@Body() activityObj:Response){
      return this.activity.addActivities(activityObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() activity: any){
        this.activity.updateActivities(id,activity);
    }
    @Delete('/:id')
    async removeactivity(@Param('id') id : number) {
        return await this.activity.removeActivities(id);
    }
}
