import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any={};
registerTemp=false;
@Output() passValue= new EventEmitter(); 
  constructor() { }

  ngOnInit() {
  }
  register() {

  }
 cancel() {
  this.passValue.emit(this.registerTemp);
  this.registerTemp=!this.registerTemp;
 }
}
