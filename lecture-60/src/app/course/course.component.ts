import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course, CourseSaleEvent } from "../interfaces";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  @Input() course!: Course;

  isOnSale = false;

  @Output()
  courseOnSaleEvent = new EventEmitter<CourseSaleEvent>();

  constructor() {}

  ngOnInit(): void {
    this.checkSaleReady();
  }

  public toggleSale(value: boolean) {
    this.isOnSale = value;
    this.courseOnSaleEvent.emit({ course: this.course, isOnSale: this.isOnSale });
  }

  private checkSaleReady() {
    const today = new Date().getDate();
    const courseDate = new Date(this.course.date).getDate();

    this.isOnSale = courseDate === today;
  }
}
