import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(list: string[], searchTxt?: string) {
    if (!searchTxt || !searchTxt.trim().length) {
      return list;
    }

    return list.filter((str) => str.toLowerCase().includes(searchTxt.toLowerCase()));
  }
}
