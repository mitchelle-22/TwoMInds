import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JournalRepository } from 'src/Repositories/journal.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { JournalController } from './journal.controller';
import { JournalService } from './journal.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,JournalRepository])],
  controllers: [JournalController],
  providers: [JournalService]
})
export class JournalModule {}
