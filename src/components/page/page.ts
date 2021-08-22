import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page"> This is PageComponent!</ul>');
    // this.element = document.createElement('ul');
    // this.element.setAttribute('class', 'page');
    // this.element.textContent = 'this is PageComponent';
  }
  attach(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    super.attachTo(parent, position);
  }
}
