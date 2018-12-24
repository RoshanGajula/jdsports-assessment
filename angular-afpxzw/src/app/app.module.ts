import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav.component';
import { FeaturedcardsComponent } from './featuredcards.component';
import { ContentcardsComponent } from './contentcards.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, NavComponent, FeaturedcardsComponent, ContentcardsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
