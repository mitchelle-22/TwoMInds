const baseUrl = "https://nest-app-1.herokuapp";
export const environment = {
  production: true,
  loginUrl: `${baseUrl + '/auth/login'}`,
  registerUrl: `${baseUrl + '/auth/register'}`,
  // Users endpoints
  getAllUsers: `${baseUrl + '/user'}`,
  getUsersById: `${baseUrl + '/user/:id'}`,
  addUser: `${baseUrl + '/user'}`,
  updateUser: `${baseUrl + '/user/:id'}`,
  deleteUser: `${baseUrl + '/user/:id'}`,
  getUsersByUUID: `${baseUrl + '/user/uuid/:id'}`,
  // DailyAssessments endpoints
  getAllDailyAssessments: `${baseUrl + '/dailyassessments'}`,
  getDailyAssessmentById: `${baseUrl + '/dailyassessments/:id'}`,
  getDailyAssessmentByLevel: `${baseUrl + '/dailyassessments/level/:id'}`,
  getDailyAssessmentByUserId: `${baseUrl + '/dailyassessments/User/:id'}`,
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
  getActivityById: `${baseUrl + '/actitivies/:id'}`,
  addActivity: `${baseUrl + '/actitivies'}`,
  updateActivity: `${baseUrl + '/actitivies/:id'}`,
  deleteActivity: `${baseUrl + '/actitivies/:id'}`,
  // Results endpoints
  getAllResults: `${baseUrl + '/results'}`,
  getResultById: `${baseUrl + '/results/'}`,
  addResult: `${baseUrl + '/results'}`,
  updateResult: `${baseUrl + '/results/:id'}`,
  getDailyResultByUserId: `${baseUrl + '/results/user/:id'}`,
  getDailyResultByAssessId: `${baseUrl + '/results/assessment/:id'}`,
  deleteResult: `${baseUrl + '/results/:id'}`,
  // Recomendations endpoints
  getAllRecomendations: `${baseUrl + '/recomendations'}`,
  getRecomendationById: `${baseUrl + '/recomendations/:id'}`,
  addRecomendation: `${baseUrl + '/recomendations'}`,
  updateRecomendation: `${baseUrl + '/recomendations/:id'}`,
  deleteRecomendation: `${baseUrl + '/recomendations/:id'}`,
  // Booking endpoints
  getAllBookings: `${baseUrl + '/booking'}`,
  getBookingById: `${baseUrl + '/booking/:id'}`,
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
  getJournalById: `${baseUrl + '/journal/:id'}`,
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


