import { Composable } from '../page/page.js';
import { BaseComponent, Component } from './../component.js';

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export class InputDialog extends BaseComponent<HTMLElement> implements Composable {
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;

  constructor() {
    super(`<dialog class="dialog">
              <div class="dialog__container">
                <div id="dialog__body"></div>
                <div class="btn__container">
                  <button class="close">Cancel</button>
                  <button class="dialog__submit">Submit</button>
                </div>
              </div>
            </dialog>`);
    const closeBtn = this.element.querySelector('.close')! as HTMLElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    };

    const submitBtn = this.element.querySelector('.dialog__submit')! as HTMLElement;
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }

  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component) {
    const body = this.element.querySelector('#dialog__body')! as HTMLElement;
    child.attachTo(body);
  }
}
