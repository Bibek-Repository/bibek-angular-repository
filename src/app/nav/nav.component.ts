import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any={};
  loginMode= false;
  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }

  login(form: any) {
    this.alertify.success('user has been logged in');
    this.toggle();
    form.reset();
  }

  toggle() {
    this.loginMode=!this.loginMode;
  }
  loggedOutAlert() {
    this.alertify.success('user has been logged out');
    this.toggle();
   
  }
 
}
