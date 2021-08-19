export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement('template');
    template.innerHTML = `<section class="img">
    <div class="img__holder">
      <img class="img__thumbnail" />
    </div>
    <p class="img__title"></p>
  </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;

    const imgElement = this.element.querySelector('.img__thumbnail')! as HTMLImageElement;
    imgElement.src = url;
    imgElement.alt = title;

    const titleElement = this.element.querySelector('.img__title')! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element);
  }
}
