import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomePageComponent } from './components/patient/home-page/home-page.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { DashboardComponent } from './components/admin/admin-login/dashboard/dashboard.component';
import { InfoPageComponent } from './components/patient/info-page/info-page.component';
import { LandingPageComponent } from './components/patient/landing-page/landing-page.component';
import { SignUpComponent } from './components/patient/sign-up/sign-up.component';
import { UserLoginComponent } from './components/patient/user-login/user-login.component';
import { SideNavigationComponent } from './components/patient/side-navigation/side-navigation.component';
import { LoginGuard } from './guards/login.guard';
import { AssessmentsComponent } from './components/patient/assessments/assessments.component';
import { ProgressResultsComponent } from './components/patient/progress-results/progress-results.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { MoreAboutQuestionComponent } from './components/patient/more-about-question/more-about-question.component';
import { AssessmentReviewComponent } from './components/patient/assessment-review/assessment-review.component';
import { TherapistAssessmentReviewComponent } from './components/admin/therapist-assessment-review/therapist-assessment-review.component';
import { AdminSideNavComponent } from './components/admin/admin-side-nav/admin-side-nav.component';
import { DiaryComponent } from './components/patient/diary/diary.component';
import { ViewResultsComponent } from './components/patient/view-results/view-results.component';
import { BookingsComponent } from './components/patient/bookings/bookings.component';


// import { Adminv2Component } from './components/adminv2/adminv2.component';
import { ActivitiesComponent } from './components/patient/activities/activities.component';
import { EmotionsComponent } from './components/patient/emotions/emotions.component';
import{ RelaxationComponent} from './components/patient/relaxation/relaxation.component';
import{ SleepComponent} from './components/patient/sleep/sleep.component'
import { EventsComponent } from './components/admin/events/events.component';
//import { ResultsComponent } from './components/admin/results/results.component';
import { DialyAssessementQuestionComponent } from './components/admin/dialy-assessement-question/dialy-assessement-question.component';
import { AdminBookingsComponent } from './components/admin/admin-bookings/admin-bookings.component';
import { EventThinkingComponent } from './components/patient/event-thinking/event-thinking.component';
import { AdminResultsComponent } from './components/admin/admin-results/admin-results.component';
import { TimeSlotComponent } from './components/admin/time-slot/time-slot.component';
import { AdminActivityReviewComponent } from './components/admin/admin-activity-review/admin-activity-review.component';
import { FaqViewComponent } from './components/patient/faq-view/faq-view.component';
import { BookingModalComponent } from './components/patient/booking-modal/booking-modal.component';
import { JournalAllEntriesComponent } from './components/admin/journal-all-entries/journal-all-entries.component';
import { JournalDetailsComponent } from './components/admin/journal-details/journal-details.component';
import { JournalListUserComponent } from './components/admin/journal-list-user/journal-list-user.component';

import { UserDetailsComponent } from './components/admin/user-details/user-details.component';
import { UsersComponent } from './components/admin/users/users.component';
import { ListDailyAssessmentComponent } from './components/patient/list-daily-assessment/list-daily-assessment.component';
import { ProfileComponent } from './components/patient/profile/profile.component';
import { TherapyComponent } from './components/patient/therapy/therapy.component';
import { ResultsComponent } from './components/patient/results/results.component';
import { AdminActivitiesComponent } from './components/admin/admin-activities/admin-activities.component';
import { AssessmentHistoryComponent } from './components/patient/assessment-history/assessment-history.component';
import { AddAssessmentResultsComponent } from './components/admin/add-assessment-results/add-assessment-results.component';
import { JournalDetailComponent } from './components/patient/journal-detail/journal-detail.component';
import { AddUserRecommendationComponent } from './components/admin/add-user-recommendation/add-user-recommendation.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoPageComponent,
  },
  {
    path: 'user-details',
    component: UserDetailsComponent,
  },
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'moreAaboutQuestion',
    component: MoreAboutQuestionComponent,
  },
  {
    path: 'allEntries',
    component: JournalAllEntriesComponent,
  },
  {
    path: 'details',
    component: JournalDetailsComponent,
  },
  {
    path: 'list',
    component: JournalListUserComponent,
  },
  {
    path: 'thinking',
    component: EventThinkingComponent,
  },
  {
    path: 'assessment-list',
    component: ListDailyAssessmentComponent,
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'resultsTracker',
    component: ProgressResultsComponent
  },
  {
    path: 'signin',
    component: UserLoginComponent,
  },
  {
    path: 'assessment',
    component: AssessmentsComponent,
  },
  {
    path: 'side-navigation',
    component: SideNavigationComponent,
     canActivate: [LoginGuard],


  },
  {path: " ", component: HomePageComponent},
  {path: "home-page", component: HomePageComponent,

},
  {

    path: 'assessment-review',
    component:AssessmentReviewComponent
  },
  {

    path: 'diary',
    component:DiaryComponent
  },
  {

    path: 'admin-side',
    component:AdminSideNavComponent
  },
   {
    path: 'view-results',
    component:ViewResultsComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'therapist-assessment-review',
    component:TherapistAssessmentReviewComponent
  }
  ,
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'activities',
    component:ActivitiesComponent
  },
{
  path: 'emotions',
  component:EmotionsComponent
},
{
  path: 'relaxation',
  component:RelaxationComponent
},
{
  path:'sleep',
  component:SleepComponent
},
{
  path:'events',
  component:EventsComponent
}
,
{
  path: 'faq',
  component: FaqViewComponent
},
{
  path:'assessement_question',
  component:DialyAssessementQuestionComponent
},
{
  path: 'admin-bookings',
  component:AdminBookingsComponent
},
{
  path: 'admin-results',
  component: AdminResultsComponent
},
{
  path: "timeslot",
  component: TimeSlotComponent
},
{
  path: 'booking-modal',
  component: BookingModalComponent
},


{
  path:'admin-activity-review',
  component:AdminActivityReviewComponent
},
{
  path: "user",
  component: UsersComponent
},
{
  path: "result-user",
  component: ResultsComponent

}
,{   path:'profile',
component: ProfileComponent},
{
  path:'assessment-history',
  component: AssessmentHistoryComponent
},
{
  path:'vid',
  component: TherapyComponent
},
{
  path:'admin-activities',
  component:AdminActivitiesComponent
},{
  path: 'rate-assessment/:id',
  component: AddAssessmentResultsComponent
},
{
  path:'journal-detail',
  component:JournalDetailComponent
},{
  path: "recommendation",
  component: AddUserRecommendationComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
