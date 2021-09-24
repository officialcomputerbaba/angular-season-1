import { AfterViewInit, Component, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ajax } from "rxjs/ajax";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
class PostAPI {
  private readonly loadingSubject = new BehaviorSubject(false);

  public isLoading$ = this.loadingSubject.asObservable();

  public getPosts() {
    this.loadingSubject.next(true);

    return ajax.getJSON("https://jsonplaceholder.typicode.com/posts").pipe(
      tap(() => {
        this.loadingSubject.next(false);
      })
    );
  }
}

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements AfterViewInit {
  constructor(public readonly postAPI: PostAPI) {}

  ngAfterViewInit(): void {
    this.postAPI.getPosts().subscribe((list) => {
      console.log(list);
    });
  }
}
