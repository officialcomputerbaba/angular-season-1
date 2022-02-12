import { Component, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";
import { map, tap } from "rxjs/operators";

function timeInterval() {
  return interval(1000).pipe(
    tap(() => {
      console.log(`Interval running `);
    }),
    map(() => new Date().toUTCString())
  );
}

@Component({
  selector: "app-clock",
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"],
})
export class ClockComponent implements OnInit {
  timeSubscription!: Subscription;

  time$!: Observable<String>;

  constructor() {}

  ngOnInit(): void {
    this.time$ = timeInterval();
  }
}
