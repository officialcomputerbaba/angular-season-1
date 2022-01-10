import { Component, OnInit } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";

interface CompanyRecord {
  company: string;
  role: number;
  sheet: {
    balance: number;
    date: string;
  };
}

function getRecords() {
  return of([
    {
      company: "Homecoming",
      role: 1,
      sheet: {
        balance: 88,
        date: "07/07/2017",
      },
    },
    {
      company: "Far from home",
      role: 1,
      sheet: {
        balance: 113,
        date: "06/26/2019",
      },
    },
    {
      company: "No way home",
      role: 3,
      sheet: {
        balance: 1000,
        date: "12/16/2021",
      },
    },
  ]).pipe(delay(1000));
}

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {
  records: CompanyRecord[] = [];

  constructor() {}

  ngOnInit() {
    getRecords().subscribe((list) => {
      this.records = list;
    });
  }

  totalBalance(records: CompanyRecord[]) {
    console.log("Total balance called");
    return records.reduce((acc, { sheet }) => sheet.balance + acc, 0);
  }
}
