import { Component, OnInit } from "@angular/core";
// todo circular dep
import { routes } from "../app-routing.module";
import * as _ from "lodash";

@Component({
  selector: "app-table-of-contents",
  templateUrl: "./table-of-contents.component.html",
  styleUrls: ["./table-of-contents.component.scss"]
})
export class TableOfContentsComponent implements OnInit {
  sandboxes: { path: string; number: number }[];
  sandboxNames = {
    5: "Observables and Subjects"
  };
  constructor() {}

  ngOnInit() {
    const paths = routes
      .slice(1)
      .map(x => x.path)
      .reverse();
    this.sandboxes = _.zip(paths, paths.map(p => +p.substring(2))).map(
      ([path, number]) => ({
        path,
        number
      })
    );
  }
}
