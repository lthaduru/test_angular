/**
 * Created by Arnav on 5/3/17.
 */
import { Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock.heros';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve( HEROES);
  }
}
