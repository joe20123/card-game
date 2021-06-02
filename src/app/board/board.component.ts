import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Board } from '../model/board';
import { Card } from '../model/card';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() numberPerRow = 6;
  @Output() foundAllPairs = new EventEmitter();
  cards = new Array<Card>();
  timePassed = 0; // second
  lastOpenedCard: Card;
  dispatchTimer: any;
  allFound = false;

  constructor() {
  }

  ngOnInit() {
    const b = new Board(this.numberPerRow);
    this.cards = b.Cards;
  }

  onClick(e) {
    this.reset();
  }

  reset() {
    if (this.dispatchTimer) {
      clearInterval(this.dispatchTimer);
      this.timePassed = 0;
    }
    this.lastOpenedCard = null;
    for (const item of this.cards) {
      item.FaceUp = false;
      item.found = false;
      item.OpenedBefore = false;
    }
  }

  startTime() {
    this.dispatchTimer = setInterval(() => {
      this.timePassed += 1;
    }, 1000);
  }

  onCardClick(e: Card) {
    if (this.timePassed === 0 ) {
      this.startTime();
    }

    if (e) {
      // check if any other card with the same face is open
      const p = this.cards.find((a) => !a.found && a.FaceUp && a.Source === e.Source && a.CardIndex !== e.CardIndex);
      if (p) {
        p.found = true;
        e.found = true;
        this.lastOpenedCard = null;

        const f = this.checkIfAllPairsHaveBeenFound();
        if (f) {
          this.reset();
          this.allFound = true;
          this.foundAllPairs.emit();
        }
      } else {
        // not found.
        if (this.allFound) {
          this.allFound = false;
        }
        // if it has been checked before, penalize 5 seconds
        if (e.OpenedBefore) {
          this.timePassed += 5;
        } else {
          e.OpenedBefore = true;
        }

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

  private checkIfAllPairsHaveBeenFound() {
    const f = this.cards.find((a) => !a.found);
    if (f) {
      // still have unmatched
      return false;
    }
    return true;
  }
}
