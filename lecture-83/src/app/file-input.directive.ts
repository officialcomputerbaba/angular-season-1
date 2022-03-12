import { Directive, ElementRef, EventEmitter, Output, OnInit, Input, HostBinding, HostListener } from "@angular/core";

export interface FileChangedEvent {
  file: File;
  url?: string;
}

@Directive({
  selector: "[fileInput]",
})
export class FileInputDirective implements OnInit {
  private inputRef!: HTMLInputElement;

  private _mime: string[] = [];

  @Input()
  set mime(listOrValue: string | string[]) {
    this._mime = Array.isArray(listOrValue) ? listOrValue : [listOrValue];
  }

  @Input("size")
  allowedSize: string | number = 0;

  value?: File;
  fileName?: string;
  fileUrl?: string;
  isImage = false;

  @Input()
  set fileInput(mimeOrTuple: [string, number] | string) {
    if (Array.isArray(mimeOrTuple) && mimeOrTuple.length === 2) {
      this.mime = mimeOrTuple[0]; // trigger the setter
      this.allowedSize = mimeOrTuple[1];
    } else if (typeof mimeOrTuple === "string" && mimeOrTuple?.trim()?.length) {
      this.mime = mimeOrTuple;
    }
  }

  @Output()
  fileChanged = new EventEmitter<FileChangedEvent>();

  @Output()
  error = new EventEmitter<string>();

  constructor(private readonly elemRef: ElementRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  ngOnInit() {
    // event listener is added through `@HostListener`
    // therefore we do not need this statement
    // this.inputRef.addEventListener("change", () => this.onFileInputChange());
  }

  @HostBinding("class.hide")
  get hide() {
    return !!this.value;
  }

  // we can use this approach also instead of setting the `hide` class
  // @HostBinding("style.display")
  // get styleDisplayProp() {
  //   return !!this.value ? "none" : "block";
  // }

  @HostListener("change", ["$event.target.files"])
  private async onFileInputChange(files?: FileList) {
    const file = files?.item(0);

    if (!file) {
      return;
    }

    const validationResult = this.validateFile(file);

    if (!validationResult.isValid) {
      this.clean();
      this.error.emit(validationResult.message);
      return;
    }

    this.value = file;
    this.fileName = file.name;

    this.isImage = !!file.type.match(/image\/(jpe?g|png|bmp|gif)?/);
    this.fileUrl = this.isImage ? await this.convertToURL(file) : undefined;

    this.fileChanged.emit({ file, url: this.fileUrl });
  }

  private clean() {
    this.value = undefined;
    this.inputRef.value = null as unknown as string;
    this.isImage = false;
    this.fileName = undefined;
    this.fileUrl = undefined;
  }

  private convertToURL(file: File) {
    return new Promise<string>((resolve, _reject) => {
      const fr = new FileReader();

      fr.readAsDataURL(file);

      fr.onload = () => resolve(fr.result as string);
    });
  }

  private validateFile(file: File) {
    const fileType = file.type;
    const fileSize = +(file.size / (1024 * 1024)).toFixed(2);

    const isSizeValid = this.allowedSize <= 0 || fileSize <= (+this.allowedSize || 0);

    if (!isSizeValid) {
      return {
        isValid: false,
        message: `Large size: Allowed size is ${this.allowedSize}`,
      };
    }

    const isMimeValid = this._mime.length === 0 || this._mime.some((m) => fileType.includes(m));

    if (!isMimeValid) {
      return {
        isValid: false,
        message: `Media type not allowed. Allowed type(s) ${this._mime.join(", ")}`,
      };
    }

    return {
      isValid: true,
    };
  }
}
