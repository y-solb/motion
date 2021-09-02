import { BaseComponent } from '../../component.js';

export class TodoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, task: string) {
    super(`<section class="todo">
                <h2 class="todo__title"></h2>
                <div class="todo__container">
                  <input type="checkbox" class="todo__checkbox"/>
                  <label for="todo-checkbox" class="todo-label"></label>
                </div>
            </section>`);
    const titleElement = this.element.querySelector('.todo__title')! as HTMLHeadingElement;
    titleElement.textContent = title;

    const todoElement = this.element.querySelector('.todo-label')! as HTMLLabelElement;
    todoElement.textContent = task;
  }
}
