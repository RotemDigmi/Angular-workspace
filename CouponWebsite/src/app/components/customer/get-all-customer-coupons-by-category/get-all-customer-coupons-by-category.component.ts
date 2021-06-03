import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-get-all-customer-coupons-by-category',
  templateUrl: './get-all-customer-coupons-by-category.component.html',
  styleUrls: ['./get-all-customer-coupons-by-category.component.css'],
})
export class GetAllCustomerCouponsByCategoryComponent implements OnInit {
  public coupons!: Coupon[];
  public currCategory!: Category;
  public categories: Category[] = [
    Category.Clothing,
    Category.Electricity,
    Category.Food,
    Category.Vacation,
  ];

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public getCustomerCouponsByCategory() {
    this.customerService.getCouponsByCategory(this.currCategory).subscribe(
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
