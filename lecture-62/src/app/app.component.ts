import { AfterViewInit, Component, Directive, ElementRef, QueryList, ViewChildren } from "@angular/core";

@Directive({
  selector: "[imgPreview]",
})
export class ImgPreviewDirective {
  constructor(public readonly elemRef: ElementRef) {}
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  @ViewChildren(ImgPreviewDirective, { read: ElementRef }) imgInpList!: QueryList<ElementRef>;

  constructor() {}

  ngAfterViewInit(): void {
    this.imgInpList.forEach((elemRef) => {
      const inp = elemRef.nativeElement;

      inp.addEventListener("change", () => this.previewImage(inp));
    });
  }

  private previewImage(inpElement: HTMLInputElement) {
    const file = inpElement.files?.item(0);
    const inputContainer = inpElement.parentElement;
    const imgContainer = inputContainer?.nextElementSibling;
    const imgTag = imgContainer?.firstElementChild as HTMLImageElement;

    const fileReader = new FileReader();

    fileReader.onloadend = (evt) => {
      imgContainer?.classList.remove("hide");

      imgTag.src = evt.target?.result as string;
    };

    fileReader.readAsDataURL(file as File);
  }
}
