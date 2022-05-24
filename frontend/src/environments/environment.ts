// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// const baseUrl = "https://nest-app-1.herokuapp.com";
//const baseUrl = "https://nest-app-1.herokuapp.com";
const baseUrl = "http://localhost:3000";
export const environment = {
  production: false,
  loginUrl: `${baseUrl + '/auth/login'}`,
  registerUrl: `${baseUrl + '/auth/register'}`,
  // Users endpoints
  getAllUsers: `${baseUrl + '/user'}`,
  getUsersById: `${baseUrl + '/user/'}`,
  addUser: `${baseUrl + '/user'}`,
  updateUser: `${baseUrl + '/user/:id'}`,
  deleteUser: `${baseUrl + '/user/:id'}`,
  getUsersByUUID: `${baseUrl + '/user/uuid/:id'}`,
  // DailyAssessments endpoints
  getAllDailyAssessments: `${baseUrl + '/dailyassessments'}`,
  getDailyAssessmentById: `${baseUrl + '/dailyassessments/:id'}`,
  getDailyAssessmentByLevel: `${baseUrl + '/dailyassessments/level/:id'}`,
  getDailyAssessmentByUserId: `${baseUrl + '/dailyassessments/User/'}`,
  addDailyAssessment: `${baseUrl + '/dailyassessments'}`,
  updateDailyAssessment: `${baseUrl + '/dailyassessments/:id'}`,
  deleteDailyAssessments: `${baseUrl + '/dailyassessments/:id'}`,
  // Assessments endpoints
  getAllAssessments: `${baseUrl + '/assessments'}`,
  getAssessmentById: `${baseUrl + '/assessments/:id'}`,
  addAssessment: `${baseUrl + '/assessments'}`,
  updateAssessment: `${baseUrl + '/assessments/:id'}`,
  deleteAssessments: `${baseUrl + '/assessments/:id'}`,
  // Activities endpoints
  getAllActivities: `${baseUrl + '/actitivies'}`,
  getActivityById: `${baseUrl + '/actitivies/'}`,
  addActivity: `${baseUrl + '/actitivies'}`,
  updateActivity: `${baseUrl + '/actitivies/:id'}`,
  deleteActivity: `${baseUrl + '/actitivies/:id'}`,
  // Results endpoints
  getAllResults: `${baseUrl + '/results'}`,
  getResultById: `${baseUrl + '/results/'}`,
  addResult: `${baseUrl + '/results'}`,
  updateResult: `${baseUrl + '/results/:id'}`,
  getDailyResultByUserId: `${baseUrl + '/results/user/'}`,
  getDailyResultByAssessId: `${baseUrl + '/results/assessment/:id'}`,
  deleteResult: `${baseUrl + '/results/:id'}`,
  // Recomendations endpoints
  getAllRecomendations: `${baseUrl + '/recomendations'}`,
  getRecomendationById: `${baseUrl + '/recomendations/:id'}`,
  addRecomendation: `${baseUrl + '/recomendations'}`,
  getRecomendationByUserId: `${baseUrl + '/recomendations/user/'}`,
  updateRecomendation: `${baseUrl + '/recomendations/:id'}`,
  deleteRecomendation: `${baseUrl + '/recomendations/:id'}`,
  // Booking endpoints
  getAllBookings: `${baseUrl + '/booking'}`,
  getBookingById: `${baseUrl + '/booking/'}`,
  getBookingByUserId: `${baseUrl + '/booking/user/'}`,
  addBooking: `${baseUrl + '/booking'}`,
  updateBooking: `${baseUrl + '/booking/:id'}`,
  deleteBooking: `${baseUrl + '/booking/:id'}`,
  // Booking status endpoints
  getAllBookingStatus: `${baseUrl + '/bookingstatus'}`,
  getBookingStatusById: `${baseUrl + '/bookingstatus/:id'}`,
  addBookingStatus: `${baseUrl + '/bookingstatus'}`,
  updateBookingStatus: `${baseUrl + '/bookingstatus/:id'}`,
  deleteBookingStatus: `${baseUrl + '/bookingstatus/:id'}`,
  // journal endpoints
  getAllJournals: `${baseUrl + '/journal'}`,
  getJournalById: `${baseUrl + '/journal/'}`,
  getJournalByUserId: `${baseUrl + '/journal/user/'}`,
  addJournal: `${baseUrl + '/journal'}`,
  updateJournal: `${baseUrl + '/journal/:id'}`,
  deleteJournal: `${baseUrl + '/journal/:id'}`,
  // timeslot endpoints
  getAllTimeslots: `${baseUrl + '/timeslot'}`,
  getTimeslotById: `${baseUrl + '/timeslot/:id'}`,
  addTimeslot: `${baseUrl + '/timeslot'}`,
  updateTimeslot: `${baseUrl + '/timeslot/:id'}`,
  deleteTimeslot: `${baseUrl + '/timeslot/:id'}`,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
