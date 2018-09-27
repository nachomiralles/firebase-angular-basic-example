import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class FirebaseInitializerService {

  constructor() { }

  static initialize(){
    firebase.initializeApp(environment.firebase);
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firebase.firestore().settings(settings);
  }
}
