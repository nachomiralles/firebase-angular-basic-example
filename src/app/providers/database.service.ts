import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Hero} from '../hero';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  db;

  public heroes: Subject<Hero[]> = new Subject<Hero[]>();
  // heroes: Hero[];

  constructor() {
    this._init();
    this.conectWithHeroes();


  }

  conectWithHeroes(){
    this.db.collection('heroes')
      .onSnapshot(
        (querySnapshot) => {
          const heroes: Hero[] = [];
          querySnapshot.forEach(
            (doc) => {
              const h = new Hero(doc.data());
              h.setId(doc.id);
              heroes.push(h);

            });
          console.log(heroes);
          this.heroes.next(heroes);
        });
  }

  deleteHero(h: Hero){
    this.db.collection('heroes')
      .doc(h.id)
      .delete();
  }

  addHero(h: Hero){
    this.db.collection('heroes')
      .add({
          // id: h.id,
          name: h.name
        });
  }

  _init() {
    firebase.initializeApp(environment.firebase);
    this.db = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    this.db.settings(settings);
  }
}
