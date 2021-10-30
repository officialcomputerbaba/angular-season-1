import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  user = {
    name: "Ajit",
    id: 1,
    email: "xyz@gmail.com",
  };

  ngOnInit() {}

  setName(name: string) {
    this.user.name = name;
  }
}
