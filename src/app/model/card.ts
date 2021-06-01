export class Card {
    Source: string;
    OpenedBefore: boolean;
    FaceUp: boolean;

    constructor(source: string) {
        this.Source = source;
    }
}