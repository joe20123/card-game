import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { CongratulationComponent } from './congratulation/congratulation.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BoardComponent,
    CongratulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
