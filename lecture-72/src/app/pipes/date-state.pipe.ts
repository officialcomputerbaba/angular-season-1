import { Pipe, PipeTransform } from "@angular/core";

type TimeDate = string | Date;

@Pipe({
  name: "dateState",
})
export class DateStatePipe implements PipeTransform {
  private lastDate!: TimeDate;

  transform(timeOrDate: TimeDate) {
    const newDate = new Date(timeOrDate || Date.now());

    const diff = +newDate - +this.lastDate;

    this.lastDate = newDate;

    const days = ~~(diff / (1000 * 60 * 60 * 24));

    return days;
  }
}
