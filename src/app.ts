import { InputDialog } from './components/dialog/dialog.js';
import { Component } from './components/component.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { Composable, PageComponent, PageItemComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const img = new ImageComponent('Image HELLO', 'https://picsum.photos/seed/picsum/200/300');
    this.page.addChild(img);

    const note = new NoteComponent('Here is title', 'And content!');
    this.page.addChild(note);

    const todo = new TodoComponent('Todo List', 'study typescript');
    this.page.addChild(todo);

    const video = new VideoComponent('Video title', 'https://www.youtube.com/watch?v=-dowcmrcRYc&t=283s');
    this.page.addChild(video);

    const imageBtn = document.querySelector('#new-image')! as HTMLButtonElement;
    imageBtn.addEventListener('click', () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector('.contents')! as HTMLElement);
