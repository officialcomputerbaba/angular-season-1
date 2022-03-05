import { Directive, ElementRef } from "@angular/core";
import { ListComponent } from "./list/list.component";

@Directive({
  selector: "[list]",
})
export class ListDirective {
  constructor(private readonly elemRef: ElementRef, private readonly cmp: ListComponent) {
    this.listOperation();
  }

  private listOperation() {
    // component is also an element therefore we can get `ElementRef` as well
    console.log(this.elemRef.nativeElement);

    // component operations
    this.cmp.focus();
    this.cmp.selected = true;
    this.cmp.value = "My List";
  }
}
