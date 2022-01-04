import { Component } from "@angular/core";
import { User } from "./interfaces";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  user: User = {
    name: "Ajit",
    email: "some@mail.com",

    // NOTE: uncomment below code to use the picture in `userPicture` pipe

    // picture: {
    //   name: "xyz",
    //   link: "https://picsum.photos/seed/2/200",
    // },
  };

  changeName(name: string) {
    if (!name || !name.trim().length) {
      return;
    }

    this.user.name = name;
  }
}
