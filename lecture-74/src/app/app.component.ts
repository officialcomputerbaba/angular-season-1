import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

interface Trip {
  distance: number;
  from: string;
  to: string;
}

function getTripData() {
  const data = {
    distance: 500,
    from: "Delhi",
    to: "Kullu",
  };

  return of(data).pipe(delay(500));
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  trip!: Trip;

  ngOnInit() {
    getTripData().subscribe((tripDetails) => (this.trip = tripDetails));
  }

  rateCharge(distance: number) {
    console.log("Called with ", distance);

    if (distance <= 50) {
      return distance * 8;
    } else if (distance > 50 && distance <= 100) {
      return distance * 9;
    }

    return distance * 12;
  }
}
