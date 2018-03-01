import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TableComponentComponent } from './table-component/table-component.component';
import { OrderrByPipe } from './sort-pipe';


@NgModule({
  declarations: [
    AppComponent,
    TableComponentComponent,
    OrderrByPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
