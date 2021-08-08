import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

interface TreeNode {
  name: string;
  techList?: TreeNode[];
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  techList: TreeNode[] = [
    {
      name: "Angular",
      techList: [
        {
          name: "Rxjs",
          techList: [],
        },
        {
          name: "Typescript",
          techList: [],
        },
      ],
    },
    {
      name: "Javascript",
      techList: [],
    },
    {
      name: "React",
      techList: [
        {
          name: "Router",
          techList: [],
        },
      ],
    },
    {
      name: "Java",
      techList: [
        {
          name: "Spring",
          techList: [
            {
              name: "IOC",
              techList: [],
            },
            {
              name: "DI",
              techList: [],
            },
          ],
        },
      ],
    },
  ];

  @ViewChild("nodesTemplate") section!: ElementRef<HTMLElement>;

  constructor() {}

  ngAfterViewInit(): void {
    const template = this.section.nativeElement;

    const ul = this.createNodes(this.techList);

    template.appendChild(ul);
  }

  private createNodes(tree: TreeNode[]) {
    const ul = document.createElement("ul");

    for (const node of tree) {
      const { name, techList } = node;

      const li = document.createElement("li");
      li.textContent = name;

      if (Array.isArray(techList) && techList.length) {
        const nestedUL = this.createNodes(techList);

        li.appendChild(nestedUL);
      }

      ul.appendChild(li);
    }

    return ul;
  }
}
