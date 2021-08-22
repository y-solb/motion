import { BaseComponent } from '../component.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  constructor() {
    super('<ul class="page"> This is PageComponent!</ul>');
  }
  attach(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    super.attachTo(parent, position);
  }
}
