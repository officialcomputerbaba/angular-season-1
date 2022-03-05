import { Directive, ElementRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[list]",
})
export class ListDirective {
  constructor(private readonly elemRef: ElementRef, private readonly container: ViewContainerRef) {
    this.listOperation();
  }

  private listOperation() {
    console.log(this.elemRef.nativeElement);

    console.log(this.container);
  }
}
