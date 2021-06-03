import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-customer-header',
  templateUrl: './customer-header.component.html',
  styleUrls: ['./customer-header.component.css'],
})
export class CustomerHeaderComponent implements OnInit {
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
