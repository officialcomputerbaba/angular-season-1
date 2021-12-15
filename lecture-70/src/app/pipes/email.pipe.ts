import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "safeEmail",
})
export class SafeEmailPipe implements PipeTransform {
  transform(email: string) {
    const replaceTxt = "[at]";

    return email.replace(/@/, replaceTxt);
  }
}
