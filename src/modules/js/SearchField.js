import Element from './Element.js';

export default class SearchField {
    constructor(parent=ROOT) {
        const t = this;
        t.input = new Element('input');
        t.input.id = `${parent.id}__input`;
        t.button = new Element('button');
        t.button.id = `${parent.id}__button`;
        t.button.innerText = 'SEARCH';
        t.input.setAttribute('autofocus', '');
        parent.append(t.input, t.button);
    }
}