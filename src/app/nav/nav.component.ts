import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify.service';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any={};
  loginMode= false;
  constructor(private alertify:AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login(form: any) {
    this.alertify.success('user has been logged in');
    this.toggle();
    form.reset();
    this.router.navigate(['/lists']);
  }

  toggle() {
    this.loginMode=!this.loginMode;
  }
  loggedOutAlert() {
    this.alertify.success('user has been logged out');
    this.toggle();
    this.router.navigate(['/home']);
    
  }
 
}
