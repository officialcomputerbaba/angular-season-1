import { Component, Input } from "@angular/core";
import { from } from "rxjs";
import { reduce } from "rxjs/operators";
import { User } from "../interfaces";

function getUserName(name: string) {
  const prefix = ["Cool", "Rapid", "Hot", "Nice", "Pro", "Lord"];

  const randomNum = (max: number) => ~~(Math.random() * max);

  const nameWithPrefix = prefix[randomNum(prefix.length)] + name;

  const nameReducer = (username: string) => username + randomNum(name.length);

  return from(name).pipe(reduce(nameReducer, nameWithPrefix));
}

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  @Input() user!: User;

  public username!: string;

  private currentName!: string;

  constructor() {}

  ngDoCheck() {
    // condition is important to prevent unwanted executions for performance reasons
    if (this.user.name === this.currentName) {
      return;
    }

    this.currentName = this.user.name;

    getUserName(this.currentName).subscribe((username) => {
      this.username = username;
    });
  }
}
