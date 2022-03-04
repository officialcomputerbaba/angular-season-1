import { Directive, ElementRef } from "@angular/core";

// @example 1: element or tag selector
// @Directive({
//   selector: "input",
// })

// @example 2: attribute selector
// @Directive({
//   selector: "[type]",
// })

// @example 3: attribute value selector
// @Directive({
//   selector: "[type=file]",
// })

// @example 4: class selector
// @Directive({
//   selector: ".form-control",
// })

// @example 5: not selector
// @Directive({
//   selector: "input:not([type=text])"
// })

// @example 6: and selector
// @Directive({
//   selector: "input.form-control",
// })

// @example 7: or selector
// @Directive({
//   selector: "input,.form-control,[type=file]",
// })

// @example 8: custom attribute selector
// @Directive({
//   selector: "[fileInput]",
// })

// @example 9: component selector
// @Directive({
//   selector: "app-road",
// })

// @example 10: component attribute selector
@Directive({
  selector: "[fileInput]",
})
export class FileDirective {
  constructor(private elmRef: ElementRef) {
    console.log("Directive Applied", this.elmRef.nativeElement);
  }
}
