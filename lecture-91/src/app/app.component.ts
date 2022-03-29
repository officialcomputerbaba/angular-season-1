import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  start = 1;
  end = 10;

  onInput(mode: "start" | "end", value: string): void {
    if (mode === "start") {
      this.start = +value;
    } else if (mode === "end") {
      this.end = +value;
    }
  }
}
