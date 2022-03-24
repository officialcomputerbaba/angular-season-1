import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[upperCase]",
})
export class UpperCaseDirective {
  private readonly inputRef!: HTMLInputElement;

  @Input() upperCasePattern!: string;

  @Output() caseConvertion = new EventEmitter<boolean>();

  constructor(private readonly elemRef: ElementRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  @HostListener("input")
  onInputChange() {
    const { value } = this.inputRef;

    let canConvertCase = true;

    if (this.upperCasePattern) {
      const regex = new RegExp(this.upperCasePattern);

      canConvertCase = !!value?.match(regex);
    }

    if (canConvertCase) {
      this.inputRef.value = value?.toUpperCase();
    }

    this.caseConvertion.emit(canConvertCase);
  }
}
