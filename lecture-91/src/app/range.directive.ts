import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

class RangeContext {
  public $implicit: number = null!;
  public index: number = null!;
}

@Directive({
  selector: "[range]",
})
export class RangeDirective {
  private _numbers: number[] = [];

  @Input()
  set rangeIn(rangeTuple: [number, number]) {
    let [start, end] = rangeTuple;

    start = +start;
    end = +end;

    this._numbers = [];

    if (end < start) {
      end = start;
    }

    for (let i = start; i < end; i += 1) {
      this._numbers.push(i);
    }

    this.renderTemplate();
  }

  constructor(private readonly templateRef: TemplateRef<RangeContext>, private readonly container: ViewContainerRef) {}

  private renderTemplate() {
    this.container.clear();

    this._numbers.forEach((value: number, index: number) => {
      this.container.createEmbeddedView(this.templateRef, { $implicit: value, index });
    });
  }
}
