import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css'],
})
export class GetDetailsComponent implements OnInit {
  public company!: Company;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit(): void {
    this.companyService.getDetails().subscribe(
      (arr) => {
        this.company = arr;
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
        alert('eror: ' + e.message);
      }
    );
  }
}
