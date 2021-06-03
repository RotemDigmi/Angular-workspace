import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-all-customer-coupons-by-max-price',
  templateUrl: './get-all-customer-coupons-by-max-price.component.html',
  styleUrls: ['./get-all-customer-coupons-by-max-price.component.css'],
})
export class GetAllCustomerCouponsByMaxPriceComponent implements OnInit {
  public coupons!: Coupon[];
  public maxPrice!: number;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public getCustomerCouponsByMaxPrice() {
    this.customerService.getCouponsByMaxPrice(this.maxPrice).subscribe(
      (arr) => {
        this.coupons = arr;
        if (arr.length === 0) {
          alert('There are no coupons at such a price.');
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
