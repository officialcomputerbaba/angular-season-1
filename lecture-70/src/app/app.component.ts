import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  twitterLink = "https://www.twitter.com/akacomputerbaba";

  username!: string;
}
