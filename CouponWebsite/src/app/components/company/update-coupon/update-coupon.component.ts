import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css'],
})
export class UpdateCouponComponent implements OnInit {
  public coupon = new Coupon();
  public couponId!: number;
  public categories: Category[] = [
    Category.Clothing,
    Category.Electricity,
    Category.Food,
    Category.Vacation,
  ];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {}

  public updateCoupon() {
    this.companyService.updateCoupon(this.coupon, this.couponId).subscribe(
      (c) => {
        alert('Coupon updated successfully');
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
