import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
  selector: "[trimLength]",
})
export class TrimLengthDirective {
  @Input() trimLength!: string | number;

  @Input()
  trimLengthPattern!: string;

  @Output() valueTrimmed = new EventEmitter<boolean>();

  private readonly inputRef!: HTMLInputElement;

  constructor(private readonly elemRef: ElementRef) {
    this.inputRef = this.elemRef.nativeElement;
  }

  @HostListener("input")
  onInputChange() {
    const { value } = this.inputRef;
    let canTrimLength = true;

    if (this.trimLengthPattern) {
      const regex = new RegExp(this.trimLengthPattern);

      canTrimLength = !!value?.match(regex);
    }

    if (canTrimLength) {
      this.inputRef.value = this.trimInputValue();
    }

    this.valueTrimmed.emit(canTrimLength);
  }

  private trimInputValue() {
    let { value } = this.inputRef;
    let isUnderRange = false;

    if (this.trimLength && value) {
      isUnderRange = value.length < this.trimLength;

      value = isUnderRange ? value : value.slice(0, +this.trimLength);
    }

    return value;
  }
}
