import { BaseComponent } from './../../component.js';
export class TextInput extends BaseComponent<HTMLElement> {
  constructor() {
    super(`<div>
            <div class="form__container">
                <label for="title">Title</label>
                <input type="text" id="title" />
            </div>
            <div class="form__container">
                <label for="contents">Contents</label>
                <textarea type="text" row='3' id="contents" /></textarea>
            </div>
        </div>
    `);
  }
  get title(): string {
    const element = this.element.querySelector('#title')! as HTMLInputElement;
    return element.value;
  }
  get contents(): string {
    const element = this.element.querySelector('#contents')! as HTMLInputElement;
    return element.value;
  }
}
