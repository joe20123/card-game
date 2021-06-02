import { Card } from "./card";
import * as _ from 'lodash';
import { ThrowStmt } from "@angular/compiler";

export class Board {
    Cards: Array<Card>;
    private availablePngFileNames = [];
    private Back_Path = 'assets/png/back.png';
    constructor(private boardDimension = 6) {
        // default total pictures to get : boardDimension x boardDimension / 2 = 18
        this.createCards(boardDimension);
    }

    private getAvailablePngFileNames() {
        for (let k = 2; k <= 10; k++) {
            this.availablePngFileNames.push('assets/png/' + k + '_of_clubs' + '.png');          
            this.availablePngFileNames.push('assets/png/' + k + '_of_diamonds' + '.png');          
            this.availablePngFileNames.push('assets/png/' + k + '_of_hearts' + '.png');          
            this.availablePngFileNames.push('assets/png/' + k + '_of_spades' + '.png');          
        }
        for (let k = 1; k <= 4; k++) {
            for (const item of ['jack', 'king', 'queen', 'ace']) {
                this.availablePngFileNames.push('assets/png/' + item + '_of_clubs' + '.png');          
                this.availablePngFileNames.push('assets/png/' + item + '_of_diamonds' + '.png');          
                this.availablePngFileNames.push('assets/png/' + item + '_of_hearts' + '.png');          
                this.availablePngFileNames.push('assets/png/' + item + '_of_spades' + '.png');          
            }
        }
    }
    private createCards(boardHeight: number) {
        this.getAvailablePngFileNames();
        const num = boardHeight * boardHeight / 2;
        const s1 = new Set<string>(_.shuffle(this.availablePngFileNames));
        const uniqueCardPaths = Array.from(s1).slice(0, num);
        // const uniqueCardPaths = _.sampleSize(this.availablePngFileNames as [], num);
        const _cards = new Array<Card>();
        for (const item of uniqueCardPaths) {
            // add twice for each card
            _cards.push(new Card(item, this.Back_Path, 0));
            _cards.push(new Card(item, this.Back_Path, 1));
        }
        this.Cards = _cards;
        this.Cards = _.shuffle(_cards);
    }

}
