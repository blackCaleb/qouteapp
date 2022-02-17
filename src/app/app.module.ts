import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QouteComponent } from './qoute/qoute.component';
import { QouteNavbarComponent } from './qoute-navbar/qoute-navbar.component';
import { QouteListComponent } from './qoute-list/qoute-list.component';
import { QouteDetailComponent } from './qoute-detail/qoute-detail.component';
import { QouteFormComponent } from './qoute-form/qoute-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QouteComponent,
    QouteNavbarComponent,
    QouteListComponent,
    QouteDetailComponent,
    QouteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
