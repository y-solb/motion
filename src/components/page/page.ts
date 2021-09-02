import { BaseComponent, Component } from '../component.js';

export interface Composable {
  addChild(child: Component): void;
}

type OnCloseListener = () => void;

interface SectionContainer extends Component, Composable {
  setOnCloseListener(listener: OnCloseListener): void;
}

type SectionContainerConstructor = {
  new (): SectionContainer;
};

export class PageItemComponent extends BaseComponent<HTMLElement> implements SectionContainer {
  private closeListenser?: OnCloseListener;
  constructor() {
    super(`<li class="page-item">
            <button class="delete">x</button>
            <section class="page-item__box"></section>
          </li>
  `);
    const closeBtn = this.element.querySelector('.delete')! as HTMLButtonElement;
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
  constructor(private pageItemConstructor: SectionContainerConstructor) {
    super('<ul class="page"></ul>');
  }
  addChild(section: Component) {
    const item = new this.pageItemConstructor();
    item.addChild(section);
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      item.removeFrom(this.element);
    });
  }
}
