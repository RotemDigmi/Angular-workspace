import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css'],
})
export class GetOneCustomerComponent implements OnInit {
  public customer!: Customer;
  public customerId!: number;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  public getOneCustomer() {
    this.adminService.getOneCustomer(this.customerId).subscribe(
      (c) => {
        this.customer = c;
      },
      (e) => {
        if (e.status === 401) {
          this.router.navigate(['login']);
          alert(
            'You have not performed any operations for a long time, so you will need to log in again.'
          );
          console.dir(e);
          return;
        }
        console.dir(e);
        alert(e.error);
      }
    );
  }
}
