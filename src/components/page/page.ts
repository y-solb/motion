import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  private closeListenser?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <section class="page-item__box"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>
  `);
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListenser && this.closeListenser();
    };
  }

  addChild(child: Component) {
    const box = this.element.querySelector('.page-item__box')! as HTMLElement;
    child.attachTo(box);
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListenser = listener;
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
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
