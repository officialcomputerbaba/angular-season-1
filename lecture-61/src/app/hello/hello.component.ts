import { AfterViewInit, Component } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements AfterViewInit {
  isLoading = true;

  ngAfterViewInit(): void {
    new Promise((resolve, reject) => {
      this.isLoading = false;
    });
  }
}
