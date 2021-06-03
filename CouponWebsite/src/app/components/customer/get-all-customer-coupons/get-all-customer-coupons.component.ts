import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-all-customer-coupons',
  templateUrl: './get-all-customer-coupons.component.html',
  styleUrls: ['./get-all-customer-coupons.component.css'],
})
export class GetAllCustomerCouponsComponent implements OnInit {
  public coupons!: Coupon[];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getAllCoupons().subscribe(
      (arr) => {
        this.coupons = arr;
        if (arr.length === 0) {
          alert('You have no coupons.');
        }
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
