import { Directive, ElementRef, TemplateRef, ViewContainerRef } from "@angular/core";

// exported context data type
class PaintContext {
  $implicit: string = null!;
  name: string = null!;
  location: string = null!;
}

@Directive({
  selector: "[paint]",
})
export class PaintDirective {
  constructor(
    private readonly elemRef: ElementRef,
    private readonly template: TemplateRef<PaintContext>,
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

    // create the view from this `template` with `context`
    this.container.createEmbeddedView(this.template, {
      $implicit: "World",
      name: "Ajit",
      location: "Earth",
    });
  }
}
