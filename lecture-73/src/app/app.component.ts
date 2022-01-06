import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  timeInMs!: number;

  isDestroyed = false;

  setTimeInMs(seconds: string | number) {
    this.timeInMs = +seconds * 1000;
  }
}
