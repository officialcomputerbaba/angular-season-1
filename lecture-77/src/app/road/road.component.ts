import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-road",
  templateUrl: "./road.component.html",
  styleUrls: ["./road.component.css"],
})
export class RoadComponent implements OnInit {
  destination = "Manali";

  constructor() {}

  ngOnInit(): void {}
}
