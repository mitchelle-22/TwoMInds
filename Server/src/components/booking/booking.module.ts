import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingRepository } from 'src/Repositories/booking.repository';
import { JournalRepository } from 'src/Repositories/journal.repository';
import { RoleRepository } from 'src/Repositories/role.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { BookingController } from './booking.controller';
import { BookingService } from './booking.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,BookingRepository,RoleRepository,JournalRepository])],
  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
