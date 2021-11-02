import { Component } from "@angular/core";

function getUserId() {
  return +Date.now().toString().slice(-4);
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isDestroyed = false;

  userId: number = getUserId();

  toggleComponent() {
    this.isDestroyed = !this.isDestroyed;

    this.userId = getUserId();
  }
}
