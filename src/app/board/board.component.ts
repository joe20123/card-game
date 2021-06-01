import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../model/board';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() numberPerRow = 6;
  cards: Board;
  constructor() {
  }

  ngOnInit() {
    this.cards = new Board(this.numberPerRow);
  }

}
