import { Component } from "@angular/core";
import { ajax } from "rxjs/ajax";
import { User } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  users: User[] = [];

  ngOnInit() {}

  getUser(id: string) {
    if (!id || !id.trim().length) {
      return;
    }

    if (this.users.find((u) => u.id === +id)) {
      return;
    }

    ajax.getJSON<User>(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe((user) => {
      this.users.push(user);
    });
  }
}
