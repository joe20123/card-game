import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../model/board';
import { Card } from '../model/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() numberPerRow = 6;
  cards = new Array<Card>();
  timePassed = '';
  lastOpenedCard: Card;
  constructor() {
  }

  ngOnInit() {
    const b = new Board(this.numberPerRow);
    this.cards = b.Cards;
  }

  onClick(e) {
    // reset
    this.lastOpenedCard = null;
    for (const item of this.cards) {
      item.FaceUp = false;
      item.found = false;
      // item.OpenedBefore = false;
    }
  }

  onCardClick(e: Card) {
    if (e) {
      // check if any other card with the same face is open
      const p = this.cards.find((a) => !a.found && a.FaceUp && a.Source === e.Source && a.CardIndex !== e.CardIndex);
      if (p) {
        p.found = true;
        e.found = true;
        this.lastOpenedCard = null;
      } else {
        // not found.
        if (this.lastOpenedCard) {
          setTimeout(() => {
            e.FaceUp = false;
            this.lastOpenedCard.FaceUp = false;
            this.lastOpenedCard = null;
          }, 1000);
        } else {
          this.lastOpenedCard = e;
        }
      }
    }
  }
}
