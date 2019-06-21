import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopComponent } from './top/top.component';
import { ShowImgComponent } from './show-img/show-img.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, TopComponent, ShowImgComponent, GridComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
