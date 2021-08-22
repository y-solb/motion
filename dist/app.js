import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const img = new ImageComponent('Image HELLO', 'https://picsum.photos/seed/picsum/200/300');
        img.attachTo(appRoot, 'beforeend');
        const note = new NoteComponent('Here is title', 'And content!');
        note.attachTo(appRoot, 'beforeend');
        const todo = new TodoComponent('Todo List', 'study typescript');
        todo.attachTo(appRoot, 'beforeend');
        const video = new VideoComponent('Video title', 'https://www.youtube.com/watch?v=-dowcmrcRYc&t=283s');
        video.attachTo(appRoot, 'beforeend');
    }
}
new App(document.querySelector('.contents'));
