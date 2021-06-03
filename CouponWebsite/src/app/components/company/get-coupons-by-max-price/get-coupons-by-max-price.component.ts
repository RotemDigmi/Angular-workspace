import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-get-coupons-by-max-price',
  templateUrl: './get-coupons-by-max-price.component.html',
  styleUrls: ['./get-coupons-by-max-price.component.css'],
})
export class GetCouponsByMaxPriceComponent implements OnInit {
  public coupons!: Coupon[];
  public maxPrice!: number;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {}

  public getCouponsByMaxPrice() {
    this.companyService.getCouponsByMaxPrice(this.maxPrice).subscribe(
      (arr) => {
        this.coupons = arr;
        if (arr.length === 0) {
          alert('There are no coupons up to such a price.');
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
