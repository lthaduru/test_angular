/**
 * Created by Arnav on 5/3/17.
 */
import { Component, Input } from '@angular/core';
import {Hero} from  './hero';

@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        i<input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
    ba<video src="../assets/video/cow.mp4" controls></video>
  `
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}

