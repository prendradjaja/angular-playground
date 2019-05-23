import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sandbox1Component } from './sandbox1/sandbox1.component';
import { Sandbox2Component } from './sandbox2/sandbox2.component';
import { Sandbox3Component } from './sandbox3/sandbox3.component';
import { Sandbox4Component } from './sandbox4/sandbox4.component';
import { Sandbox5Component } from './sandbox5/sandbox5.component';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';
import { Sandbox6Component } from './sandbox6/sandbox6.component';

@NgModule({
  declarations: [
    AppComponent,
    Sandbox1Component,
    Sandbox2Component,
    Sandbox3Component,
    Sandbox4Component,
    Sandbox5Component,
    TableOfContentsComponent,
    Sandbox6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
