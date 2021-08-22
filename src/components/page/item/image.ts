import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="img">
          <div class="img__holder">
          <img class="img__thumbnail" />
          </div>
          <p class="img__title"></p>
          </section>`);

    const imgElement = this.element.querySelector('.img__thumbnail')! as HTMLImageElement;
    imgElement.src = url;
    imgElement.alt = title;

    const titleElement = this.element.querySelector('.img__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
