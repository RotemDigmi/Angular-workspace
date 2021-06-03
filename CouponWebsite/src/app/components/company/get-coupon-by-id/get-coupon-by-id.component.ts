import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-get-coupon-by-id',
  templateUrl: './get-coupon-by-id.component.html',
  styleUrls: ['./get-coupon-by-id.component.css'],
})
export class GetCouponByIdComponent implements OnInit {
  public coupon!: Coupon;
  public couponId!: number;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {}

  public getOneCoupon() {
    this.companyService.getCouponById(this.couponId).subscribe(
      (c) => {
        this.coupon = c;
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
