import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__box"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>
  `);
  }
  addChild(child: Component) {
    const box = this.element.querySelector('.page-item__box')! as HTMLElement;
    child.attachTo(box);
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  constructor() {
    super('<ul class="page"></ul>');
  }
  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
  }
}
