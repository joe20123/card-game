import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {
  @Output() reset = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onResetClick() {
    this.reset.emit();
  }
}
