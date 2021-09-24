import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements AfterViewInit {
  isLoading = true;

  ngAfterViewInit(): void {
    const pr = new Promise((resolve, reject) => {
      this.isLoading = false;

      // when we call `resolve`, `then callback` is schedule to be triggered in next(2nd) tick
      resolve(null); // optional value, `null` is just for type checking safety
    });

    pr.then(() => {
      this.isLoading = true;
    });
  }
}
