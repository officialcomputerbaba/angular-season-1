import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(list: string[], sortBy: "asc" | "desc" | string = "asc") {
    return list.sort((n1, n2) => {
      const relation = n1.localeCompare(n2);

      return sortBy === "desc" ? -relation : relation;
    });
  }
}
