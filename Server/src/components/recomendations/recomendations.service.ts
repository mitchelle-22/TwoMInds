import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecomendationsRepository } from 'src/Repositories/recommendation.repository';

@Injectable()
export class RecomendationsService {
    constructor(@InjectRepository(RecomendationsRepository) private recomendationsRepo: RecomendationsRepository){}

    async addrecomendations(recomendations: any) {
        try{
            console.log(recomendations)
            return await this.recomendationsRepo.save(recomendations);
         }
         catch(err){
            throw new HttpException(err, HttpStatus.BAD_REQUEST);
         }
    }

    async getAllrecomendationss() { //'recomendations_id',
        return await this.recomendationsRepo.find({ relations: ['RecomendationFK','UserRecomendationFK']
            // ['id','RecomendationFK','UserRecomendationFK','active']
        })

    }
    async getrecomendationsByUserId(id :any){
     
        const recomendations = await this.recomendationsRepo.find({ relations:['RecomendationFK'],where: { UserRecomendationFK : id}});
        if (!recomendations) {
            throw new NotFoundException(`recomendations #${id} not found`);
        }
        return recomendations;
    }
  async getrecomendationsById(id :any){
     
    const recomendations = await this.recomendationsRepo.findOne(id);
    if (!recomendations) {
        throw new NotFoundException(`recomendations #${id} not found`);
    }
    return recomendations;
}
async updaterecomendations(recomendationsId : any, assessObj : any){
    const user = await this.recomendationsRepo.findOne(recomendationsId);
    if (!user) {
        throw new NotFoundException(`recomendations #${recomendationsId} not found`);
    }
    return await this.recomendationsRepo.update(recomendationsId,assessObj);
}
async removerecomendations(Id: number){
    const recomendations = await this.recomendationsRepo.findOne(Id);
    if (!recomendations) {
        throw new NotFoundException(`recomendations #${Id} not found`);
    }
    await this.recomendationsRepo.remove(recomendations);
} 

}
