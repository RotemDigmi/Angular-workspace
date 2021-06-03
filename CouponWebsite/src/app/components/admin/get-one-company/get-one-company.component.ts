import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css'],
})
export class GetOneCompanyComponent implements OnInit {
  public company!: Company;
  public companyId!: number;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  public getOneCompany() {
    this.adminService.getOneCompany(this.companyId).subscribe(
      (c) => {
        this.company = c;
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
