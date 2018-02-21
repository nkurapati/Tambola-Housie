import { Component, OnInit } from '@angular/core';

import { GameService } from './../services/game.service';
import { Game } from './../interfaces/game';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: '[app-play]',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  game: Game;
  constructor(private gameService:GameService, private route:  ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.game = this.gameService.getGame(params['id']);
    });
  }

  updateNumber() {
    var rindex = Math.floor(Math.random() * this.game.remainingNumbers.length);
    var lastNumber = this.game.remainingNumbers.splice(rindex, 1)[0];
    this.game.completedNumbers.push(lastNumber);
    this.game.lastNumber = lastNumber;
    this.gameService.setGames(null);
  }

}
