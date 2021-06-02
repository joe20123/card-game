export class Card {
    Source: string;
    OpenedBefore: boolean;
    FaceUp = false;
    BackSource: string;
    CardIndex = 0; // 0 and 1
    found = false;
    constructor(source: string, backSource: string, cardIndex = 0) {
        this.Source = source;
        this.BackSource = backSource;
        this.CardIndex = cardIndex;
    }
}