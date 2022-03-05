import { Directive, ElementRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[list]",
})
export class ListDirective {
  constructor(private readonly elemRef: ElementRef, private readonly templateRef: TemplateRef<any>) {
    this.listOperation();
  }

  private listOperation() {
    // `ng-template` is also an element rendered as comment in DOM
    // therefore we can get `ElementRef` as well
    console.log(this.elemRef.nativeElement);

    // `<ng-template>` reference
    console.log(this.templateRef);
  }
}
