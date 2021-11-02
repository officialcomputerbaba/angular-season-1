import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isDestroyed = false;

  toggleComponent() {
    this.isDestroyed = !this.isDestroyed;
  }
}
