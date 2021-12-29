import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  names = ["Ronaldo", "Ajit", "Sagar", "Anusha", "Aniket", "Pankaj", "Amitabh"];

  filterKey!: string;
}
