export class PageComponent {
    constructor() {
        this.element = document.createElement('ul');
        this.element.setAttribute('class', 'page');
        this.element.textContent = 'this is PageComponent';
    }
    attachTo(parent, position = 'afterbegin') {
        parent.insertAdjacentElement(position, this.element);
    }
}
