import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childOfCard',
  templateUrl: './childOfCard.component.html',
  styleUrls: ['./childOfCard.component.css'],
  template: `<p>Received value: {{ parentValue }}</p>`
})
export class ChildOfCardComponent implements OnInit {
  @Input() parentValue: any;
  @Output() emitEvent= new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }

  cancel() {
    this.emitEvent.emit(this.parentValue.completed);
  }

}
