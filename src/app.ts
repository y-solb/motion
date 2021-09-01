import { TextInput } from './components/dialog/input/text-input.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { InputDialog, MediaData, TextData } from './components/dialog/dialog.js';
import { Component } from './components/component.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private dialogRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    this.bindElementToDialog<MediaInput>(
      '#new-image',
      MediaInput,
      (input: MediaInput) => new ImageComponent(input.title, input.url)
    );

    this.bindElementToDialog<MediaInput>(
      '#new-video',
      MediaInput,
      (input: MediaInput) => new VideoComponent(input.title, input.url)
    );

    this.bindElementToDialog<TextInput>(
      '#new-note',
      TextInput,
      (input: TextInput) => new NoteComponent(input.title, input.contents)
    );

    this.bindElementToDialog<TextInput>(
      '#new-todo',
      TextInput,
      (input: TextInput) => new TodoComponent(input.title, input.contents)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const elementBtn = document.querySelector(selector)! as HTMLButtonElement;
    elementBtn.addEventListener('click', () => {
      const dialog = new InputDialog();
      const inputSection = new InputComponent();

      dialog.addChild(inputSection);
      dialog.attachTo(this.dialogRoot);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.dialogRoot);
      });
      dialog.setOnSubmitListener(() => {
        const item = makeSection(inputSection);
        this.page.addChild(item);
        dialog.removeFrom(this.dialogRoot);
      });
    });
  }
}

new App(document.querySelector('.contents')! as HTMLElement, document.body);
