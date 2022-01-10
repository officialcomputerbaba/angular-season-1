import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "memoizedFn",
})
export class MemoizedFnPipe implements PipeTransform {
  transform(fn: Function, ...args: unknown[]) {
    return fn(...args);
  }
}
