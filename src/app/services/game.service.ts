import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import {Game} from './../interfaces/game';

@Injectable()
export class GameService {
  private games:Game[]
  constructor() {
    this.games = JSON.parse(localStorage.getItem('games'));
  }

  private storeGames() {
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  getGames(): Observable<Game[]> {
    return of(this.games);
  }

  setGames(data: Game[]) {
    this.games = data;
    this.storeGames();
  }
}
