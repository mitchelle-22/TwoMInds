import { Module } from '@nestjs/common';
import { DailyassessmentsService } from './dailyassessments.service';
import { DailyAssessmentRepository } from 'src/Repositories/dailyassessement.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/Repositories/user.repository';
import { DailyassessmentsController } from './dailyassessments.controller';
import { AssessmentRepository } from 'src/Repositories/assessement.repository';
import { RoleRepository } from 'src/Repositories/role.repository';
@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,DailyAssessmentRepository,AssessmentRepository,RoleRepository])],
  controllers: [DailyassessmentsController],
  providers: [DailyassessmentsService]
})
export class DailyassessmentsModule {}
