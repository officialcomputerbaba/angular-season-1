import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[fileInput]",
})
export class FileInputDirective implements OnInit {
  value?: File;
  fileName?: string;
  fileUrl?: string;

  isImage = false;

  private inputRef!: HTMLInputElement;

  constructor(private readonly elemRef: ElementRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  ngOnInit() {
    this.inputRef.addEventListener("change", () => this.onFileInputChange());
  }

  private async onFileInputChange() {
    const file = this.inputRef.files?.item(0);

    if (!file) {
      return;
    }

    this.value = file;
    this.fileName = file.name;

    this.isImage = !!file.type.match(/image\/(jpe?g|png|bmp|gif)?/);
    this.fileUrl = this.isImage ? await this.convertToURL(file) : undefined;
  }

  private convertToURL(file: File) {
    return new Promise<string>((resolve, _reject) => {
      const fr = new FileReader();

      fr.readAsDataURL(file);

      fr.onload = () => resolve(fr.result as string);
    });
  }
}
