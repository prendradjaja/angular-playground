import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sandbox1Component } from './sandbox1/sandbox1.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';

@NgModule({
  declarations: [
    AppComponent,
    Sandbox1Component,
    Sandbox2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
