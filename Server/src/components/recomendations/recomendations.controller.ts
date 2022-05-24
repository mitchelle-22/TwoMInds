import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecomendationsService } from './recomendations.service';
import { Response } from 'express';
@Controller('recomendations')
export class RecomendationsController {
    constructor(private recommend: RecomendationsService) {}

    @Get()
    getAllRecommendations() {
      return this.recommend.getAllrecomendationss();
    }
    @Get('/:id')
    getrecommendById(@Param('id') id : string) {
      return this.recommend.getrecomendationsById(id);
    }
    @Get('/user/:id')
    getrecomendationsByUserId(@Param('id') id : string) {
      return this.recommend.getrecomendationsByUserId(id);
    }
    @Post()
    addrecommend(@Body() recommendObj:Response){
      return this.recommend.addrecomendations(recommendObj);
    }
    @Patch('/:id')
    run1(@Param('id') id : number,@Body() recommend: any){
        this.recommend.updaterecomendations(id,recommend);
    }
    @Delete('/:id')
    async removerecommend(@Param('id') id : number) {
        return await this.recommend.removerecomendations(id);
    }
}
