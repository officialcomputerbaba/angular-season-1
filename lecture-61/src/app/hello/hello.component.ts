import { AfterViewInit, Component } from "@angular/core";
import { ajax } from "rxjs/ajax";
import { startWith, tap } from "rxjs/operators";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements AfterViewInit {
  isLoading = true;

  ngAfterViewInit(): void {
    ajax
      .getJSON("https://jsonplaceholder.typicode.com/posts")
      .pipe(
        // Solution: comment out or don't use `startWith` operator,
        // always be careful about the RxJS operators and their behavior
        // startWith([]),
        tap(() => {
          this.isLoading = false;
        })
      )
      .subscribe((list) => {
        console.log("posts", list);
      });
  }
}

// Exercise Problem

// An observable-based exercise problem, try to find the problem and a solution.

// git checkout lecture-61-exercise
