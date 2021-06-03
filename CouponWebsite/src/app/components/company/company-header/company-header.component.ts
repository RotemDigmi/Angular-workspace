import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-company-header',
  templateUrl: './company-header.component.html',
  styleUrls: ['./company-header.component.css'],
})
export class CompanyHeaderComponent implements OnInit {
  constructor(private router: Router, private logService: LogService) {}

  ngOnInit(): void {}

  public logOut() {
    this.logService.logOut().subscribe(
      (t) => {
        console.log(t);
        localStorage.clear;
        alert('You are logged out, thanks and goodbye!');
      },
      (e) => {
        alert('logged out failed.');
        console.dir(e);
      }
    );
  }
}
