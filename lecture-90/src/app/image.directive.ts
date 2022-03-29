import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

export class ImageOutletContext {
  public $implicit: string = null!;
  public url: string = null!;
  public filename: string = null!;
}

@Directive({
  selector: "[imageOutlet]",
})
export class ImageDirective {
  private inputRef!: HTMLInputElement;

  @Input()
  set imageOutlet(inputRef: HTMLInputElement | string | null) {
    this.registerInputElement(inputRef as HTMLInputElement);
  }

  @Input()
  set imageOutletFrom(inputRef: HTMLInputElement) {
    this.registerInputElement(inputRef);
  }

  constructor(
    private readonly template: TemplateRef<ImageOutletContext>,
    private readonly container: ViewContainerRef
  ) {}

  private registerInputElement(inputRef: HTMLInputElement) {
    this.inputRef = inputRef;
    this.inputRef.addEventListener("change", () => this.onFileInputChange());
  }

  private onFileInputChange() {
    const file = this.inputRef.files?.item(0);

    if (!file) {
      return;
    }
    const fr = new FileReader();

    fr.readAsDataURL(file);

    fr.onload = () => {
      const url = fr.result as string;

      this.container.clear();
      this.container.createEmbeddedView(this.template, {
        $implicit: url,
        url: url,
        filename: file.name,
      });
    };
  }
}
