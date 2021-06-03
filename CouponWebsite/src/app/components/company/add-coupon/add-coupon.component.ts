import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css'],
})
export class AddCouponComponent implements OnInit {
  public coupon = new Coupon();
  public categories: Category[] = [
    Category.Clothing,
    Category.Electricity,
    Category.Food,
    Category.Vacation,
  ];

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {}

  public addCoupon() {
    this.companyService.addCoupon(this.coupon).subscribe(
      (c) => {
        alert('Coupon added successfully');
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
