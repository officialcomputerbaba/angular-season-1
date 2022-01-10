import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "memoizedFn",
})
export class MemoizedFnPipe implements PipeTransform {
  transform(fn: Function, thisArg: any, ...args: unknown[]) {
    return fn.call(thisArg, ...args);
  }
}
