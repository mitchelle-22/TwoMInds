import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesRepository } from 'src/Repositories/activities.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { ActitiviesController } from './actitivies.controller';
import { ActitiviesService } from './actitivies.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, ActivitiesRepository])],
  controllers: [ActitiviesController],
  providers: [ActitiviesService]
})
export class ActitiviesModule {}
