import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css'],
})
export class DeleteCustomerComponent implements OnInit {
  public customerId!: number;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  public deleteCustomer() {
    this.adminService.deleteCustomer(this.customerId).subscribe(
      (c) => {
        alert('Customer deleted successfully');
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
