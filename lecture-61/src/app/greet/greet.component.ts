import { Component, OnInit } from "@angular/core";

function isMorningTime() {
  const hours = new Date().getHours();

  return hours < 12;
}

@Component({
  selector: "app-greet",
  templateUrl: "./greet.component.html",
  styleUrls: ["./greet.component.css"],
})
export class GreetComponent implements OnInit {
  public isAllowed = false;

  constructor() {
    // your dervied calc
    if (isMorningTime()) {
      this.isAllowed = true;
    }
  }

  ngOnInit(): void {}
}
