import { Component, Input } from "@angular/core";

@Component({
  selector: "app-greet",
  templateUrl: "./greet.component.html",
  styleUrls: ["./greet.component.css"],
})
export class GreetComponent {
  @Input()
  message!: string;
}
