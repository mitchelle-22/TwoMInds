import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultsRepository } from 'src/Repositories/results.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { ResultsController } from './results.controller';
import { ResultsService } from './results.service';

@Module({
  imports: [TypeOrmModule.forFeature([ResultsRepository,UserRepository])],
  controllers: [ResultsController],
  providers: [ResultsService]
})
export class ResultsModule {}
