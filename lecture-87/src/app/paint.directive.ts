import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[paint]",
})
export class PaintDirective {
  constructor(
    private readonly elemRef: ElementRef,
    private readonly template: TemplateRef<any>,
    private readonly container: ViewContainerRef
  ) {
    // `ElementRef` - render as comment in DOM
    // `TemplateRef` - associated template
    // `ViewContainerRef` - associated view container
    console.log(this.elemRef.nativeElement, this.template);
  }

  ngOnInit() {
    // clear the previous view, if any
    this.container.clear();

    // create the view from this `template`
    this.container.createEmbeddedView(this.template);
  }
}
