import { Injectable } from '@nestjs/common';
// import * as firebase from 'firebase-admin';
// const serviceAcc = require("./firebase.json");
@Injectable()
export class AppService {
  start() {
    
   

    return {msg:'Mental Health Server Connected!'};
    // return fireApp;
  }

  // run(){
  //   const fireApp = firebase.initializeApp({
  //     credential : firebase.credential.cert(serviceAcc),
  //     databaseURL: "https://myapp-9c1b7.firebaseio.com"
  // });

  // return fireApp;
  // }
}
