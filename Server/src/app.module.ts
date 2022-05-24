import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './config/postgres.config';
import { UserModule } from './components/user/user.module';
import { AuthModule } from './components/auth/auth.module';
import { AssessmentsModule } from './components/assessments/assessments.module';
import { DailyassessmentsModule } from './components/dailyassessments/dailyassessments.module';
import { ActitiviesModule } from './components/actitivies/actitivies.module'; 
import { RecomendationsModule } from './components/recomendations/recomendations.module'; 
import { ResultsModule } from './components/results/results.module'; 
import { RoleModule } from './components/role/role.module'; 
import { UserRoleModule } from './components/user_role/user_role.module'; 
import { BookingModule } from './components/booking/booking.module';
import { TimeslotModule } from './components/timeslot/timeslot.module';
import { JournalModule } from './components/journal/journal.module';
import { BookingstatusModule } from './components/bookingstatus/bookingstatus.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(dbConfig),
    AuthModule,
    AssessmentsModule,
    DailyassessmentsModule,
    UserRoleModule,
    RoleModule,
    ResultsModule,
    ActitiviesModule,
    RecomendationsModule,
    BookingModule,
    BookingstatusModule,
    JournalModule,
    TimeslotModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
