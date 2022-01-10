import { Component } from "@angular/core";
import { milesToKm } from "./utils/distance.utils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  users = [
    { name: "Ajit", distance: 2.5 },
    { name: "Anusha", distance: 5 },
    { name: "Sagar", distance: 3.2 },
  ];

  milesToKm = milesToKm;
}
