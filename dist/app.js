import { TodoComponent } from './components/page/item/todo.js';
import { NoteComponent } from './components/page/item/note.js';
import { ImageComponent } from './components/page/item/image.js';
import { PageComponent, PageItemComponent } from './components/page/page.js';
import { VideoComponent } from './components/page/item/video.js';
class App {
    constructor(appRoot) {
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
    }
}
new App(document.querySelector('.contents'));
