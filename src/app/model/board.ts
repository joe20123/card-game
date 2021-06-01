import { Card } from "./card";
import * as _ from 'lodash';
import { ThrowStmt } from "@angular/compiler";
import { runInThisContext } from "vm";

export class Board {
    Cards: Array<Card>;
    private availablePngFileNames: string[];

    constructor(private boardDimension = 6) {
        // default total pictures to get : boardDimension x boardDimension / 2 = 18
        this.createCards(boardDimension);
    }

    private getAvailablePngFileNames() {
        for (let k = 2; k <= 10; k++) {
            this.availablePngFileNames.push(k.toString + '_of_clubs');          
            this.availablePngFileNames.push(k.toString + '_of_diamonds');          
            this.availablePngFileNames.push(k.toString + '_of_hearts');          
            this.availablePngFileNames.push(k.toString + '_of_spades');          
        }
        for (let k = 1; k <= 4; k++) {
            for (const item of ['jack', 'king', 'queen']) {
                this.availablePngFileNames.push(item + '_of_clubs');          
                this.availablePngFileNames.push(item + '_of_diamonds');          
                this.availablePngFileNames.push(item + '_of_hearts');          
                this.availablePngFileNames.push(item + '_of_spades');          
            }
        }
    }
    private createCards(boardHeight: number) {
        this.getAvailablePngFileNames();
        const uniqueCardPaths = _.sample(this.availablePngFileNames, boardHeight * boardHeight / 2);
        const _cards = new Array<Card>();
        for (const item of uniqueCardPaths) {
            // add twice for each card
            _cards.push(new Card(item));
            _cards.push(new Card(item));
        }
        this.Cards = _.shuffle(_cards);
    }
}
