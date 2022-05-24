import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/Repositories/user.repository';
import { DailyAssessmentRepository } from 'src/Repositories/dailyassessement.repository';
import { AssessmentsController } from './assessments.controller';
import { AssessmentsService } from './assessments.service';
import { RoleRepository } from 'src/Repositories/role.repository';
import { AssessmentRepository } from 'src/Repositories/assessement.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,DailyAssessmentRepository,RoleRepository,AssessmentRepository])],
  controllers: [AssessmentsController],
  providers: [AssessmentsService]
})
export class AssessmentsModule {}
