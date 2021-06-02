import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Card } from '../model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() model: Card;
  @Output() cardClick = new EventEmitter<Card>();

  constructor() {
    const ii = 0;
   }

  ngOnInit() {
    const ii = 0;
  }

  onClick(e) {
    if (e) {
      if (!this.model.FaceUp) {
        this.model.FaceUp = true;
        // this.model.OpenedBefore = true;
        this.cardClick.emit(this.model);
      }
    }
  }
}
