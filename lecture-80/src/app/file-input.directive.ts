import { Directive, ElementRef, OnInit, OnChanges, SimpleChanges, Input } from "@angular/core";

@Directive({
  selector: "[fileInput]",
})
export class FileInputDirective implements OnInit, OnChanges {
  private inputRef!: HTMLInputElement;

  private mime!: string;

  private allowedSize: string | number = 0;

  value?: File;
  fileName?: string;
  fileUrl?: string;

  isImage = false;

  @Input()
  fileInput!: [string, number] | string;

  constructor(private readonly elemRef: ElementRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  ngOnInit() {
    this.inputRef.addEventListener("change", () => this.onFileInputChange());
  }

  ngOnChanges(changes: SimpleChanges) {
    const fileInput = changes["fileInput"];

    const mimeOrTuple = fileInput.currentValue;

    if (Array.isArray(mimeOrTuple) && mimeOrTuple.length === 2) {
      this.mime = mimeOrTuple[0];
      this.allowedSize = mimeOrTuple[1];
    } else if (typeof mimeOrTuple === "string" && mimeOrTuple?.trim()?.length) {
      this.mime = mimeOrTuple;
    }
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
