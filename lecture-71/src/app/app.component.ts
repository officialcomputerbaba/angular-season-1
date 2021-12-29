import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  names = ["Ronaldo", "Ajit", "Sagar", "Anusha", "Aniket", "Pankaj", "Amitabh"];

  sortKey: "asc" | "desc" | string = "asc";

  addName(name: string): void {
    if (!name || !name?.trim().length) {
      return;
    }

    this.names.push(name);
  }
}
