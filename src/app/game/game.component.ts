import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from './../interfaces/game';
import { Router } from '@angular/router';

@Component({
  selector: '[app-game]',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  @Input() game: Game;
  @Input() isPlay:boolean;
  @Output() updateNumber = new EventEmitter();
  @Output() completeGame = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  startGame(event) {
    event.stopPropagation();
    this.router.navigate(['/games', this.game.id]);
  }

  onUpdateNumber() {
    this.updateNumber.emit();
  }

  onCompleteGame() {
    this.completeGame.emit();
  }

}
