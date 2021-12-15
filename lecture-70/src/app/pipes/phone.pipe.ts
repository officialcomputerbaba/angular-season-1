import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "phone",
})
export class PhonePipe implements PipeTransform {
  transform(phone: string, length: string | number = 4, pattern = "*") {
    const regex = new RegExp(`\\d{${length}}$`);

    return phone.replace(regex, pattern.repeat(+length));
  }
}
