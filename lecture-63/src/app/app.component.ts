import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public nodes = [
    {
      name: "Web",
      children: [
        {
          name: "Javascript",
          children: [
            {
              name: "Ajax",
            },
            {
              name: "DOM",
            },
          ],
        },
        {
          name: "Angular",
          children: [
            {
              name: "Rxjs",
            },
            {
              name: "Typescript",
            },
          ],
        },
      ],
    },
    {
      name: "Languages",
      children: [
        {
          name: "C",
          children: [
            {
              name: "Libuv",
              children: [
                {
                  name: "Event Loop",
                },
              ],
            },
          ],
        },
        {
          name: "C++",
        },
        {
          name: "Java",
          children: [{ name: "Spring Boot" }],
        },
      ],
    },
  ];
}
