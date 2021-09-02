import { BaseComponent } from '../../component.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="img">
            <h2 class="img__title"></h2>
              <div class="img__holder">
              <img class="img__thumbnail" />
              </div>
          </section>`);

    const imgElement = this.element.querySelector('.img__thumbnail')! as HTMLImageElement;
    imgElement.src = url;
    imgElement.alt = title;

    const titleElement = this.element.querySelector('.img__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
  }
}
