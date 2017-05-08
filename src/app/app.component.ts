import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from './hero.service';

 // heroes: Hero[] ;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService],


  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>

   

  `

})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes : Hero[];

  constructor(private heroService: HeroService){}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeros() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit() : void {
    this.getHeros();
  }


}
