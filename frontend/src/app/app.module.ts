import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SearchPipe } from './search.pipe';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './components/patient/landing-page/landing-page.component';
import { InfoPageComponent } from './components/patient/info-page/info-page.component';
import { SignUpComponent } from './components/patient/sign-up/sign-up.component';

import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/admin/admin-login/dashboard/dashboard.component';
import { SideNavigationComponent } from './components/patient/side-navigation/side-navigation.component';

import { HomePageComponent } from './components/patient/home-page/home-page.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { UserLoginComponent } from './components/patient/user-login/user-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AssessmentReviewComponent } from './components/patient/assessment-review/assessment-review.component';
import { AssessmentsComponent } from './components/patient/assessments/assessments.component';
import { ProgressResultsComponent } from './components/patient/progress-results/progress-results.component';
import { ChunkPipe } from './pipes/chunkpipe';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MoreAboutQuestionComponent } from './components/patient/more-about-question/more-about-question.component';
import { TherapistAssessmentReviewComponent } from './components/admin/therapist-assessment-review/therapist-assessment-review.component';
import { AdminSideNavComponent } from './components/admin/admin-side-nav/admin-side-nav.component';
import { DiaryComponent } from './components/patient/diary/diary.component';
import { ViewResultsComponent } from './components/patient/view-results/view-results.component';
import { BookingsComponent } from './components/patient/bookings/bookings.component';
import { ActivitiesComponent } from './components/patient/activities/activities.component';
import { EmotionsComponent } from './components/patient/emotions/emotions.component';
import { RelaxationComponent } from './components/patient/relaxation/relaxation.component';
import { SleepComponent } from './components/patient/sleep/sleep.component';
import { EventsComponent } from './components/admin/events/events.component';
import { DialyAssessementQuestionComponent } from './components/admin/dialy-assessement-question/dialy-assessement-question.component';
import { AdminBookingsComponent } from './components/admin/admin-bookings/admin-bookings.component';
import { EventThinkingComponent } from './components/patient/event-thinking/event-thinking.component';
import { AdminResultsComponent } from './components/admin/admin-results/admin-results.component';
import { TimeSlotComponent } from './components/admin/time-slot/time-slot.component';
import { AdminActivityReviewComponent } from './components/admin/admin-activity-review/admin-activity-review.component';
import { FaqViewComponent } from './components/patient/faq-view/faq-view.component';
import { JournalAllEntriesComponent } from './components/admin/journal-all-entries/journal-all-entries.component';
import { JournalListUserComponent } from './components/admin/journal-list-user/journal-list-user.component';
import { JournalDetailsComponent } from './components/admin/journal-details/journal-details.component';
import { BookingModalComponent } from './components/patient/booking-modal/booking-modal.component';
import { UserDetailsComponent } from './components/admin/user-details/user-details.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ListDailyAssessmentComponent } from './components/patient/list-daily-assessment/list-daily-assessment.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { TherapyComponent } from './components/patient/therapy/therapy.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { ResultsComponent } from './components/patient/results/results.component';
import { AdminActivitiesComponent } from './components/admin/admin-activities/admin-activities.component';
import { AssessmentHistoryComponent } from './components/patient/assessment-history/assessment-history.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AddAssessmentResultsComponent } from './components/admin/add-assessment-results/add-assessment-results.component';
import { JournalDetailComponent } from './components/patient/journal-detail/journal-detail.component';
import { AddUserRecommendationComponent } from './components/admin/add-user-recommendation/add-user-recommendation.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    LandingPageComponent,
    InfoPageComponent,
    SignUpComponent,
    HomePageComponent,
    AdminLoginComponent,
    SignUpComponent,
    DashboardComponent,
    SideNavigationComponent,
    SignUpComponent,
    UserLoginComponent,
    AssessmentReviewComponent,
    AdminDashboardComponent,
    MoreAboutQuestionComponent,
    AssessmentsComponent,
    ProgressResultsComponent,
    ChunkPipe,
    AdminDashboardComponent,
    AdminSideNavComponent,
    TherapistAssessmentReviewComponent,
    AdminSideNavComponent,
    DiaryComponent,
    ViewResultsComponent,
    BookingsComponent,
    ActivitiesComponent,
    EmotionsComponent,
    RelaxationComponent,
    SleepComponent,
    EventsComponent,
    ResultsComponent,
    DialyAssessementQuestionComponent,
    AdminBookingsComponent,
    EventThinkingComponent,
    AdminResultsComponent,
    TimeSlotComponent,
    AdminActivityReviewComponent,
    FaqViewComponent,
    JournalAllEntriesComponent,
    JournalListUserComponent,
    JournalDetailsComponent,
    JournalDetailComponent,
    BookingModalComponent,
    UserDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    UsersComponent,
    ListDailyAssessmentComponent,
    ProfileComponent,
    TherapyComponent,
    AdminActivitiesComponent,
    AssessmentHistoryComponent,
    AddAssessmentResultsComponent,

    AddUserRecommendationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HttpClientModule,
   
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  providers: [ChunkPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
