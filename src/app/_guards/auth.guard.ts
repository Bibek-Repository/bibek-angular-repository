import { CanActivate, Router } from '@angular/router';
import { Injectable} from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AlertifyService } from '../service/alertify.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {}

  canActivate(): boolean {
    this.alertify.error('you shall not pass');
    this.router.navigate(['/home']);
    return false;
  }
}
