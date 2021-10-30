import { Component, Input } from "@angular/core";
import { User } from "../interfaces";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent {
  @Input() users: User[] = [];

  isDescOrder = false;

  size: number = 0;

  constructor() {}

  ngDoCheck() {
    // condition is important to prevent unwanted executions for performance reasons
    if (this.users.length === this.size) {
      return;
    }

    this.size = this.users.length;

    this.sortUsers();
  }

  private sortUsers() {
    this.users.sort((user1, user2) => {
      const orderDirection = user2.name.localeCompare(user1.name);

      return this.isDescOrder ? orderDirection : -orderDirection;
    });
  }

  changeOrder(isDesc: boolean) {
    this.isDescOrder = isDesc;
    this.sortUsers();
  }
}
