import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "age",
})
export class AgePipe implements PipeTransform {
  transform(birthday: string | Date) {
    const dateDiff = Date.now() - new Date(birthday).getTime();

    return ~~(dateDiff / 3.15576e10);
  }
}
