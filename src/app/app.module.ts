import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OmdbListComponent } from './omdb-list/omdb-list.component';

import { OmdbService } from "./services/omdb.service";

@NgModule({
  declarations: [
    AppComponent,
    OmdbListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ OmdbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
