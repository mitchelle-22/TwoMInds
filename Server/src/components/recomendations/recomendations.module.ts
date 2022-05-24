import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesRepository } from 'src/Repositories/activities.repository';
import { RecomendationsRepository } from 'src/Repositories/recommendation.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { RecomendationsController } from './recomendations.controller';
import { RecomendationsService } from './recomendations.service';

@Module({
  imports: [TypeOrmModule.forFeature([RecomendationsRepository,UserRepository, ActivitiesRepository])],
  controllers: [RecomendationsController],
  providers: [RecomendationsService]
})
export class RecomendationsModule {}
