import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientType } from 'src/app/models/client-type.model';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public userType!: ClientType;
  public userEmail!: string;
  public userPassword!: string;
  public isLogedIn = false;
  public clientsTypes: ClientType[] = [
    ClientType.Administrator,
    ClientType.Company,
    ClientType.Customer,
  ];

  constructor(private router: Router, private logService: LogService) {}

  public login() {
    console.log(`
      clientType: ${this.userType}
      Email: ${this.userEmail}
      Passwords: ${this.userPassword}
      `);

    this.logService
      .login(this.userType, this.userEmail, this.userPassword)
      .subscribe(
        (loginItem) => {
          this.isLogedIn = true;
          localStorage.setItem('token', loginItem.token);
          console.log(loginItem.token);
          switch (this.userType) {
            case ClientType.Administrator:
              this.router.navigate(['admin/admin-home']);
              break;
            case ClientType.Company:
              this.router.navigate(['company/company-home']);
              break;
            case ClientType.Customer:
              this.router.navigate(['customer/customer-home']);
              break;
          }
        },
        (e) => {
          alert('Client with this email or password not found.');
          // alert(e.error.message);
          console.dir(e);
        }
      );
  }
}
