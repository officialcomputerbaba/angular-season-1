import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BreadcrumbService {
  private paths: string[] = [];

  private pathEventSubject = new BehaviorSubject<string[]>(this.paths);

  pathEvent$ = this.pathEventSubject.asObservable();

  private emitPathEvent() {
    // wait a tick then emit
    // because view is already gets composed when `add/remove` method is called
    // watch this video`https://youtu.be/4nYlO9TsK60` to know more
    setTimeout(() => this.pathEventSubject.next(this.paths));
  }

  public add(pathName: string): void {
    this.paths.push(pathName);
    this.emitPathEvent();
  }

  public remove(pathName: string): void {
    this.paths.splice(this.paths.indexOf(pathName), 1);
    this.emitPathEvent();
  }
}
