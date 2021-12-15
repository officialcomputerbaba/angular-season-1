import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  phone = "9998889999";
  trimLength: string | number = 3;
  pattern = "-";
}
