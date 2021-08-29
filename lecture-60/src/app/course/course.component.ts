import { Component,  Input, OnInit } from "@angular/core";
import { Course } from "../interfaces";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.css"],
})
export class CourseComponent implements OnInit {
  @Input() course!: Course;

  isOnSale = false;

  constructor() {}

  ngOnInit(): void {
    this.checkSaleReady();
  }

  private checkSaleReady() {
    const today = new Date().getDate();
    const courseDate = new Date(this.course.date).getDate();

    this.isOnSale = courseDate === today;
  }
}
