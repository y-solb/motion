import { TextInput } from './components/dialog/input/text-input.js';
import { MediaInput } from './components/dialog/input/media-input.js';
import { InputDialog } from './components/dialog/dialog.js';
import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';
class App {
    constructor(appRoot, dialogRoot) {
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        const imageBtn = document.querySelector('#new-image');
        imageBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const image = new ImageComponent(inputSection.title, inputSection.url);
                this.page.addChild(image);
                dialog.removeFrom(dialogRoot);
            });
        });
        const videoBtn = document.querySelector('#new-video');
        videoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new MediaInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const video = new VideoComponent(inputSection.title, inputSection.url);
                this.page.addChild(video);
                dialog.removeFrom(dialogRoot);
            });
        });
        const noteBtn = document.querySelector('#new-note');
        noteBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const note = new NoteComponent(inputSection.title, inputSection.contents);
                this.page.addChild(note);
                dialog.removeFrom(dialogRoot);
            });
        });
        const todoBtn = document.querySelector('#new-todo');
        todoBtn.addEventListener('click', () => {
            const dialog = new InputDialog();
            const inputSection = new TextInput();
            dialog.addChild(inputSection);
            dialog.attachTo(dialogRoot);
            dialog.setOnCloseListener(() => {
                dialog.removeFrom(dialogRoot);
            });
            dialog.setOnSubmitListener(() => {
                const todo = new TodoComponent(inputSection.title, inputSection.contents);
                this.page.addChild(todo);
                dialog.removeFrom(dialogRoot);
            });
        });
    }
}
new App(document.querySelector('.contents'), document.body);
