import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[list]",
})
export class ListDirective {
  constructor(private readonly elemRef: ElementRef) {
    console.log(this.elemRef.nativeElement);
    this.listOperation();
  }

  private listOperation() {
    const ul = this.elemRef.nativeElement as HTMLUListElement;

    ul.classList.add("custom-list");

    ul.addEventListener("click", () => alert("List clicked"));
  }
}
