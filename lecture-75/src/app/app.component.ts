import { Component OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { User } from "./interfaces";


function getUsers() {
  return ajax.getJSON<User[]>("https://jsonplaceholder.typicode.com/users");
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  usersList$!: Observable<User[]>;

  constructor() {}

  ngOnInit() {
    this.usersList$ = getUsers();
  }
}
