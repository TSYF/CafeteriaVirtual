
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyCzKemj1B0Sn6SwKQAg4n-avpGV7tYURH8",
    authDomain: "cafeteria-virtual-duoc.firebaseapp.com",
    projectId: "cafeteria-virtual-duoc",
    storageBucket: "cafeteria-virtual-duoc.appspot.com",
    messagingSenderId: "978424992568",
    appId: "1:978424992568:web:b76c3d1058338b588067cd"
  }
  
};

export const fbApp = initializeApp(environment.firebaseConfig);
export const fbFirestore = getFirestore(fbApp);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
// import { getFirestore } from '@angular/fire/firestore';
