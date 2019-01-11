import { Selector } from 'testcafe';

export default class commonSelectors {
    constructor() {
        this.checkbox = Selector('.checkBox');
        this.button = Selector('button');
        this.cardList = Selector('.cardList');
        this.text = Selector('.description');
    }

    getText() {
        return this.text;
    }

    getButton() {
        return this.button;
    }

    getAllCheckBoxes() {
        return this.checkbox;
    }

    getAllCardList() {
        return this.cardList;
    }
}