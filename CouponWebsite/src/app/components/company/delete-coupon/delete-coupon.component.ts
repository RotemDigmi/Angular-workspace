import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css'],
})
export class DeleteCouponComponent implements OnInit {
  public couponId!: number;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {}

  public deleteCoupon() {
    this.companyService.deleteCoupon(this.couponId).subscribe(
      (c) => {
        alert('Coupon deleted successfully');
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
