import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingRepository } from 'src/Repositories/booking.repository';
import { RoleRepository } from 'src/Repositories/role.repository';
import { TimeslotRepository } from 'src/Repositories/timeslot.repository';
import { UserRepository } from 'src/Repositories/user.repository';
import { TimeslotController } from './timeslot.controller';
import { TimeslotService } from './timeslot.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository,TimeslotRepository,RoleRepository,BookingRepository])],
  controllers: [TimeslotController],
  providers: [TimeslotService]
})
export class TimeslotModule {}
