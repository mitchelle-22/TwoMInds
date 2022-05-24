import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingStatusRepository } from 'src/Repositories/bookingstatus.repository';

import { BookingstatusController } from './bookingstatus.controller';
import { BookingstatusService } from './bookingstatus.service';

@Module({
    imports: [TypeOrmModule.forFeature([BookingStatusRepository])],
    controllers: [BookingstatusController],
    providers: [BookingstatusService]
})
export class BookingstatusModule {}
