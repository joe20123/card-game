import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Card Match';
  finished = false;

  onReset() {
    this.finished = false;
  }

  onFoundAllPairs(e) {
    this.finished = true;
  }
}
