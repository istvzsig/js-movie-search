export default class Element {
    constructor(type) {
        this.element = document.createElement(type || 'div');

        return this.element;
    }
}