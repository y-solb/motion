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
        this.dialogRoot = dialogRoot;
        this.page = new PageComponent(PageItemComponent);
        this.page.attachTo(appRoot);
        this.bindElementToDialog('#new-image', MediaInput, (input) => new ImageComponent(input.title, input.url));
        this.bindElementToDialog('#new-video', MediaInput, (input) => new VideoComponent(input.title, input.url));
        this.bindElementToDialog('#new-note', TextInput, (input) => new NoteComponent(input.title, input.contents));
        this.bindElementToDialog('#new-todo', TextInput, (input) => new TodoComponent(input.title, input.contents));
    }
    bindElementToDialog(selector, InputComponent, makeSection) {
        const elementBtn = document.querySelector(selector);
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
new App(document.querySelector('.contents'), document.body);
