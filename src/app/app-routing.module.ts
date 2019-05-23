// Generated file. Do not edit manually.
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TableOfContentsComponent } from "./table-of-contents/table-of-contents.component";
import { Sandbox1Component } from "./sandbox1/sandbox1.component";
import { Sandbox2Component } from "./sandbox2/sandbox2.component";
import { Sandbox3Component } from "./sandbox3/sandbox3.component";
import { Sandbox4Component } from "./sandbox4/sandbox4.component";
import { Sandbox5Component } from "./sandbox5/sandbox5.component";
import { Sandbox6Component } from "./sandbox6/sandbox6.component";

export const routes: Routes = [
  { path: "", component: TableOfContentsComponent },
  { path: "s/1", component: Sandbox1Component },
  { path: "s/2", component: Sandbox2Component },
  { path: "s/3", component: Sandbox3Component },
  { path: "s/4", component: Sandbox4Component },
  { path: "s/5", component: Sandbox5Component },
  { path: "s/6", component: Sandbox6Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
