import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
     this.heroService.getHeroes()
     .subscribe(heroes => this.heroes = heroes);
  }

}
