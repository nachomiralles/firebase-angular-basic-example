// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB7kIK0xyKz-3uFZgv_wiW6a0zjQupIcX4",
    authDomain: "heroes-example.firebaseapp.com",
    databaseURL: "https://heroes-example.firebaseio.com",
    projectId: "heroes-example",
    storageBucket: "heroes-example.appspot.com",
    messagingSenderId: "522039537567"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
