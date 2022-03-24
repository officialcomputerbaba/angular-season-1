import { Component } from "@angular/core";

@Component({
  selector: "app-accordion",
  templateUrl: "./accordion.component.html",
  styleUrls: ["./accordion.component.css"],
})
export class AccordionComponent {
  constructor() {}

  ngAfterViewInit() {
    console.log("View initialized in component");
    console.log("After component view Directive view hook will be called");
  }
}
