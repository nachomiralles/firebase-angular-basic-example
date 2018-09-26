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
  nextID: number = 1;

  public heroes: Subject<Hero[]> = new Subject<Hero[]>();

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
              h.setFirebaseId(doc.id);
              heroes.push(h);
            });
          this._sortHeroes(heroes);
          if(heroes.length>0) this.nextID = heroes[heroes.length-1].newId + 1;
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
          newId: this.nextID,
          name: h.name
        });
  }

  _sortHeroes(heroes: Hero[]){
    heroes.sort(
      (h1, h2) =>{
        if(h1.newId>h2.newId) {
          return 1;
        }
        if(h1.newId<h2.newId){
          return -1;
        }
        return 0;
      });
  }

  _init() {
    firebase.initializeApp(environment.firebase);
    this.db = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    this.db.settings(settings);
  }
}
