import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sandbox1Component } from './sandbox1/sandbox1.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';
import { Sandbox3Component } from './sandbox3/sandbox3.component';
import { Sandbox4Component } from './sandbox4/sandbox4.component';

@NgModule({
  declarations: [
    AppComponent,
    Sandbox1Component,
    Sandbox2Component,
    Sandbox3Component,
    Sandbox4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
