// Generated file. Do not edit manually.
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Sandbox1Component } from "./sandbox1/sandbox1.component";
import { Sandbox2Component } from "./sandbox2/sandbox2.component";
import { Sandbox3Component } from "./sandbox3/sandbox3.component";
import { Sandbox4Component } from "./sandbox4/sandbox4.component";

const routes: Routes = [
  { path: "s/1", component: Sandbox1Component },
  { path: "s/2", component: Sandbox2Component },
  { path: "s/3", component: Sandbox3Component },
  { path: "s/4", component: Sandbox4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
