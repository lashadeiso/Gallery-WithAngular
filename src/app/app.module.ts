import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillDataComponent } from './fill-data/fill-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FillDataComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
