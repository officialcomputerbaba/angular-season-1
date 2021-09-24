import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent implements AfterViewInit {
  name = "Ajit";
  can = false;
  message = "Morning";

  ngAfterViewInit() {
    this.message = "Good Morning";
  }
}
