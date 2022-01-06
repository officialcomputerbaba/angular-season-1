import { OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { Subscription, interval } from "rxjs";

@Pipe({
  name: "timer",
  pure: false,
})
export class TimerPipe implements PipeTransform, OnDestroy {
  private cachedTimeInMs!: number;

  private timer$!: Subscription;

  private latestValue = 0;

  transform(timeInMs: string | number) {
    if (this.cachedTimeInMs == timeInMs || !timeInMs || this.latestValue === 100) {
      return this.latestValue;
    }

    this.dispose();
    this.cachedTimeInMs = +timeInMs;

    this.timer$ = interval(+timeInMs).subscribe((counter: number) => {
      this.latestValue = counter >= 100 ? 100 : counter;

      if (this.latestValue === 100) {
        this.dispose();
      }

      console.log(`Time: ${timeInMs} Value: ${this.latestValue}`);
    });

    console.log("Timer started ", timeInMs);

    return this.latestValue;
  }

  private dispose() {
    console.log("Timer stopped ", this.cachedTimeInMs);
    this.timer$?.unsubscribe();
  }

  ngOnDestroy() {
    this.dispose();
  }
}
