// Generated file. Do not edit manually.
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Sandbox1Component } from "./sandbox1/sandbox1.component";
import { Sandbox2Component } from "./sandbox2/sandbox2.component";

const routes: Routes = [
  { path: "s/1", component: Sandbox1Component },
  { path: "s/2", component: Sandbox2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
