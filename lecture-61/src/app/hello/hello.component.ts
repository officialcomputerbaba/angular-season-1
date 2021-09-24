import { Component, ViewChild } from "@angular/core";
import { GreetComponent } from "../greet/greet.component";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.css"],
})
export class HelloComponent {
  @ViewChild(GreetComponent, { static: true }) greetCmp!: GreetComponent;

  name = "Ajit";
}
