import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-get-coupons-by-category',
  templateUrl: './get-coupons-by-category.component.html',
  styleUrls: ['./get-coupons-by-category.component.css'],
})
export class GetCouponsByCategoryComponent implements OnInit {
  public coupons!: Coupon[];
  public currCategory!: Category;
  public categories: Category[] = [
    Category.Clothing,
    Category.Electricity,
    Category.Food,
    Category.Vacation,
  ];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {}

  public getCouponsByCategory() {
    this.companyService.getCouponsByCategory(this.currCategory).subscribe(
      (arr) => {
        this.coupons = arr;
        if (arr.length === 0) {
          alert('There are no coupons in this category.');
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
