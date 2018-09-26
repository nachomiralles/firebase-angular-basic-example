import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import {DatabaseService} from '../providers/database.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private databaseService: DatabaseService) {
    this.databaseService.heroes.subscribe(
      (commingHeroesFromProvider) =>{
        this.heroes = commingHeroesFromProvider;
      }

    )
  }

  ngOnInit() {
    // this.getHeroes();
  }

  // getHeroes(): void {
  //   this.heroService.getHeroes()
  //   .subscribe(heroes => this.heroes = heroes);
  // }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  addToFirebase(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.databaseService.addHero({name} as Hero);
  }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }

  deleteFromFirebase(hero: Hero): void {
    this.databaseService.deleteHero(hero);
  }

}
