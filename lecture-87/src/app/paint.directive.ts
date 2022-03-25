import { Directive, ElementRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[paint]",
})
export class PaintDirective {
  constructor(private readonly elemRef: ElementRef, private readonly template: TemplateRef<any>) {
    // `ElementRef` - render as comment in DOM
    // `TemplateRef` - associated template
    console.log(this.elemRef.nativeElement, this.template);
  }
}
